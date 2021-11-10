from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class AddToPlaylistForm(FlaskForm):
    playlistId = IntegerField('playlistId', validators=[DataRequired()])
    songId = IntegerField('songId', validators=[DataRequired()])

   
