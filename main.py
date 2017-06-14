from flask import Flask, request, send_from_directory
from flask_mail import Message, Mail
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_folder="static")
app.config.update(
    DEBUG=True,
    #EMAIL SETTINGS
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = 'liepieshov@ucu.edu.ua',
    MAIL_PASSWORD = ''
    )
mail = Mail(app)
# mail.connect()
@app.route('/index.html')
@app.route('/')
def root():
    msg = Message("Hello",
                  sender="liepieshov@ucu.edu.ua",
                  recipients=["liepieshov@ucu.edu.ua"])
    msg.body = "HEY BITCH, HOW DO YOU DO=)"
    mail.send(msg)
    # return "Hello"
    return app.send_static_file('index.html')


@app.route('/login.html')
def login():
    return app.send_static_file('login.html')


@app.route('/risk.html')
def risk():
    return app.send_static_file('risk.html')


@app.route('/team.html')
def team():
    return app.send_static_file('team.html')


if __name__ == "__main__":
    app.run(debug=True)
