
   
# from sqlalchemy.orm import relationship
from .db import db
# from sqlalchemy.ext.declarative import declarative_base

# from sqlalchemy.schema import Column, ForeignKey
# from sqlalchemy.types import Integer, String



class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=False)
    profileURL = db.Column(db.String)
    headerURL = db.Column(db.String)
    biopictureURL = db.Column(db.String)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'bio': self.bio,
            'profileURL': self.profileURL,
            'headerURL': self.headerURL,
            'biopictureURL': self.biopictureURL
        }

    songs=db.relationship('Song', back_populates='artist')
    albums=db.relationship('Album', back_populates='artist')