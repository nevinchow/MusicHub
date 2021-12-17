"""empty message

Revision ID: 61c66198566c
Revises: 9b972be28a04
Create Date: 2021-12-15 08:06:48.205455

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '61c66198566c'
down_revision = '9b972be28a04'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('songs_playlists', 'id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('songs_playlists', sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###