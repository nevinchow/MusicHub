from flask.cli import AppGroup
from app.seeds.albums import seed_albums
from .users import seed_users, undo_users
from .albums import seed_albums, undo_albums
from .artists import seed_artists, undo_artists
from .reviews import seed_reviews, undo_reviews
from .songs import seed_songs, undo_songs

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_artists()
    seed_albums()
    seed_songs()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_artists()
    undo_albums()
    undo_songs()
    undo_reviews()
    # Add other undo functions here
