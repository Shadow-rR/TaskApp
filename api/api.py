from flask import Flask,jsonify,request,json
from flask_sqlalchemy import SQLAlchemy
app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///todos.db"
db=SQLAlchemy(app)
class Todo(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    content=db.Column(db.Text,nullable=False)
    def __str__(self):
        return f'{self.id} {self.content}'

def serializer(todo):
    return {
        'id':todo.id,
        'content':todo.content
    }
@app.route('/api',methods=['GET'])
def index():
    print([*map(serializer,Todo.query.all())])
    return jsonify([*map(serializer,Todo.query.all())])

@app.route('/api/create',methods=['POST'])
def create():
    data=json.loads(request.data)
    todo=Todo(content=data['content'])
    db.session.add(todo)
    db.session.commit()
    return {'201':'created successfully'}

@app.route('/api/<int:id>',methods=['GET'])
def show(id):
    return jsonify([*map(serializer,Todo.query.filter_by(id=id))])

@app.route('/api/delete/<int:id>',methods=['POST'])
def delete(id):
    data=json.loads(request.data)
    Todo.query.filter_by(id=data['id']).delete()
    db.session.commit()
    return {'204':'deleted successfully'}

@app.route('/api/edit/<int:id>',methods=['POST'])
def edit(id):
    data=json.loads(request.data)
    todo=Todo.query.get(id)
    todo.content=data['content']
    db.session.commit()
    print([*map(serializer,Todo.query.filter_by(id=id))])
    return {'203':'successfully updated'}


if __name__=='__main__':
    app.run(debug=True)