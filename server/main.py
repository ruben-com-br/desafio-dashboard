import mysql.connector
import pandas as pd
import os
from flask import Flask, jsonify
from dotenv import load_dotenv

# Carregar as variáveis de ambiente do arquivo .env
load_dotenv()

# Definir a configuração do banco de dados usando variáveis de ambiente
db_config = {
    'host': os.getenv('DB_HOST'),
    'port': int(os.getenv('DB_PORT')),
    'database': os.getenv('DB_NAME'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD')
}

# Função para conectar ao banco de dados
def connect_to_db():
    try:
        # Estabelecer a conexão
        conn = mysql.connector.connect(**db_config)
        if conn.is_connected():
            print("Conexão ao banco de dados foi estabelecida com sucesso!")
        return conn
    except mysql.connector.Error as err:
        print(f"Erro ao conectar ao banco de dados: {err}")
        return None

# Função para realizar um SELECT e retornar os resultados
def fetch_data(query):
    conn = connect_to_db()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(query)
            rows = cursor.fetchall()
            return rows
        except Exception as e:
            print(f"Erro ao executar a consulta: {e}")
            return []
        finally:
            cursor.close()
            conn.close()

# Inicializar a aplicação Flask
app = Flask(__name__)

# Rota GET para obter os dados do banco de dados
@app.route('/get-data', methods=['GET'])
def get_data():
    query = "SELECT * FROM nome_da_tabela LIMIT 10"  # Substitua 'nome_da_tabela' pela tabela correta
    data = fetch_data(query)
    
    if data:
        return jsonify(data), 200  # Retorna os dados como JSON
    else:
        return jsonify({"error": "Nenhum dado encontrado"}), 404

# Rodar a aplicação Flask
if __name__ == '__main__':
    app.run(debug=True)
