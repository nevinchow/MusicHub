"""empty message

Revision ID: 9a4bbd69c375
Revises: 00d7825e9d8f
Create Date: 2021-11-08 12:42:15.481187

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a4bbd69c375'
down_revision = '00d7825e9d8f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('songs', sa.Column('song_link', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('songs', 'song_link')
    # ### end Alembic commands ###
