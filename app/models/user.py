from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
# from sqlalchemy.orm import relationship
# from app.models.playlist import Playlist
# from app.models.song import Song
# from app.models.album import Album
# from app.models.review import Review

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    playlists = db.relationship('Playlist', back_populates="user")
    # songs =db.relationship('Song', back_populates='user')
    # albums= db.relationship('Album', back_populates='user')
    reviews= db.relationship('Review', back_populates='user')
