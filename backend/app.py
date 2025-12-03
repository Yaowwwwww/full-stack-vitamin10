from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Do not watch the clock. Do what it does. Keep going.",
    "Stay hungry, stay foolish.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail."
]

@app.route('/quote')
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5100)
