from flask import Flask, render_template, request
from.. import afpoafh

#importamos las librerias del modelo(como kera)


app = Flask(__name__)
model = afpoafh()

@app.route('/', methods =['GET'])
def hello_word():
    return render_template('index.html')

@app.route('/', methods =['POST'])
def predict():
    imagefile=request.files['imagefile']
    image_path='./images/'+imagefile.filename
    imagefile.save(image_path)

    #prediction part
    yhat=model.predict(image)
    label = decode_predcitions(yhat)
    label = label[0][0]

    #devuelve predicción
    classification = '%s (%.2f%%)' % (label[1], label[2]*100)
    return render_template('index.html', prediction=classification)

if __name__== "__main__":
    app.run(port = 3001, debug=True)