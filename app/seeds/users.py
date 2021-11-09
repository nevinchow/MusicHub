from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    kelly = User(
        username='kelly', email='kelly@aa.io', password='password')
    joe = User(
        username='joe', email='joe@aa.io', password='password')
    zander = User(
        username='zander', email='zander@aa.io', password='password')
    adrian = User(
        username='adrian', email='adrian@aa.io.', password='password')
    brad = User(
        username='brad', email='brad@aa.io', password='password')
    david = User(
        username='david', email='david@aa.io', password='password')
    james = User(
        username='james', email='james@aa.io', password='password')
    zoe = User(
        username='zoe', email='zoe@aa.io', password='password')
    jessica = User(
        username='jessica', email='jessica@aa.io', password='password')
    jason = User(
        username='jason', email='jason@aa.io', password='password')
    jess = User(
        username='jess', email='jess@aa.io', password='password')
    josh = User(
        username='josh', email='josh@aa.io', password='password')
  


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(kelly)
    db.session.add(joe)
    db.session.add(zander)
    db.session.add(adrian)
    db.session.add(brad)
    db.session.add(david)
    db.session.add(james)
    db.session.add(zoe)
    db.session.add(jessica)
    db.session.add(jason)
    db.session.add(jess)
    db.session.add(josh)
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
