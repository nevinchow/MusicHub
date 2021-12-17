"""empty message

Revision ID: 9b972be28a04
Revises: ecefcd0a1c23
Create Date: 2021-12-13 15:32:44.021485

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9b972be28a04'
down_revision = 'ecefcd0a1c23'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('songs_playlists', sa.Column('id', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('songs_playlists', 'id')
    # ### end Alembic commands ###