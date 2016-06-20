from datetime import date
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    years = float((date.today() - date(1991, 10, 23)).days) / 365
    weeks = round((years % 1) * 52)
    return render_template('index.html', years=int(years), weeks=int(weeks))


@app.route('/seconds')
def hello():
    return "hello word"

if __name__ == '__main__':
    app.run()
