from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class PlaylistForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    imageURL = StringField('imageURL', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    

