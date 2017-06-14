from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_folder="static")


@app.route('/index.html')
@app.route('/')
def root():
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
