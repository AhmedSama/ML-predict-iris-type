from modal import modal
from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/test")
def test():
    return "it is working"

@app.route("/",methods = ["POST"])
def index():
    data = request.get_json()
    slength = data['slength']
    swidth = data['swidth']
    plength = data['plength']
    pwidth = data['pwidth']
    result = modal.predict([[float(slength),float(swidth),float(plength),float(pwidth)]])
    if result[0] == 0:
        result = "Iris-Setosa"
    elif result[0] == 1:
        result = "Iris-Versicolour"
    elif result[0] == 2:
        result = "Iris-Virginica"
    return jsonify({"ok":True,"result" : result})




if __name__ == "__main__":
    app.run(debug=True)
















