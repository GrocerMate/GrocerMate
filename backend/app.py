from flask import Flask, jsonify
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app)

@app.route("/api/grocers", methods=["GET"])
def get_grocers():
    grocers = []
    with open("data/sample_products.csv", newline="") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            grocers.append(row)
    return jsonify(grocers)

if __name__ == "__main__":
    app.run(debug=True)
