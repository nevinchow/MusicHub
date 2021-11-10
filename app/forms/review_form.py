from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import User


class ReviewForm(FlaskForm):
    albumId = IntegerField('albumId', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])