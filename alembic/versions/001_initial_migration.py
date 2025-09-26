"""Initial migration

Revision ID: 001
Revises: 
Create Date: 2024-01-01 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '001'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Create users table
    op.create_table('users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('password_hash', sa.String(length=255), nullable=True),
        sa.Column('role', sa.Enum('NURSE', 'ADMIN', name='userrole'), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)

    # Create patients table
    op.create_table('patients',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('first_name', sa.String(length=100), nullable=False),
        sa.Column('last_name', sa.String(length=100), nullable=False),
        sa.Column('phone_encrypted', sa.Text(), nullable=False),
        sa.Column('condition', sa.String(length=200), nullable=False),
        sa.Column('language', sa.String(length=10), nullable=True),
        sa.Column('discharge_date', sa.Date(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_patients_id'), 'patients', ['id'], unique=False)

    # Create follow_up_templates table
    op.create_table('follow_up_templates',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('code', sa.String(length=20), nullable=False),
        sa.Column('offset_days', sa.Integer(), nullable=False),
        sa.Column('message_template', sa.Text(), nullable=False),
        sa.Column('active', sa.Boolean(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_follow_up_templates_id'), 'follow_up_templates', ['id'], unique=False)
    op.create_index(op.f('ix_follow_up_templates_code'), 'follow_up_templates', ['code'], unique=True)

    # Create enrollments table
    op.create_table('enrollments',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('patient_id', sa.Integer(), nullable=False),
        sa.Column('program', sa.String(length=50), nullable=True),
        sa.Column('started_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('ended_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['patient_id'], ['patients.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_enrollments_id'), 'enrollments', ['id'], unique=False)

    # Create scheduled_messages table
    op.create_table('scheduled_messages',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('enrollment_id', sa.Integer(), nullable=False),
        sa.Column('template_id', sa.Integer(), nullable=False),
        sa.Column('send_at', sa.DateTime(timezone=True), nullable=False),
        sa.Column('status', sa.Enum('QUEUED', 'SENT', 'DELIVERED', 'FAILED', name='messagestatus'), nullable=True),
        sa.Column('attempt_count', sa.Integer(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['enrollment_id'], ['enrollments.id'], ),
        sa.ForeignKeyConstraint(['template_id'], ['follow_up_templates.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_scheduled_messages_id'), 'scheduled_messages', ['id'], unique=False)

    # Create message_logs table
    op.create_table('message_logs',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('patient_id', sa.Integer(), nullable=False),
        sa.Column('direction', sa.Enum('INBOUND', 'OUTBOUND', name='messagedirection'), nullable=False),
        sa.Column('body_redacted', sa.Text(), nullable=True),
        sa.Column('raw_body_encrypted', sa.Text(), nullable=True),
        sa.Column('provider', sa.String(length=50), nullable=True),
        sa.Column('external_id', sa.String(length=100), nullable=True),
        sa.Column('received_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['patient_id'], ['patients.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_message_logs_id'), 'message_logs', ['id'], unique=False)

    # Create triage_results table
    op.create_table('triage_results',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('message_id', sa.Integer(), nullable=False),
        sa.Column('risk', sa.Enum('GREEN', 'YELLOW', 'RED', name='risklevel'), nullable=False),
        sa.Column('reasons_json', sa.Text(), nullable=False),
        sa.Column('action_hint', sa.Text(), nullable=False),
        sa.Column('model_name', sa.String(length=50), nullable=False),
        sa.Column('confidence', sa.Float(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['message_id'], ['message_logs.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_triage_results_id'), 'triage_results', ['id'], unique=False)

    # Create alerts table
    op.create_table('alerts',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('triage_id', sa.Integer(), nullable=False),
        sa.Column('channel', sa.Enum('SMS', 'EMAIL', name='alertchannel'), nullable=False),
        sa.Column('target', sa.String(length=200), nullable=False),
        sa.Column('status', sa.Enum('PENDING', 'SENT', 'RESOLVED', 'FAILED', name='alertstatus'), nullable=True),
        sa.Column('sent_at', sa.DateTime(timezone=True), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['triage_id'], ['triage_results.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_alerts_id'), 'alerts', ['id'], unique=False)

    # Create audit_logs table
    op.create_table('audit_logs',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('actor_user_id', sa.Integer(), nullable=True),
        sa.Column('action', sa.String(length=100), nullable=False),
        sa.Column('entity', sa.String(length=50), nullable=False),
        sa.Column('entity_id', sa.Integer(), nullable=False),
        sa.Column('meta_json', sa.Text(), nullable=True),
        sa.Column('ts', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['actor_user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_audit_logs_id'), 'audit_logs', ['id'], unique=False)


def downgrade() -> None:
    op.drop_table('audit_logs')
    op.drop_table('alerts')
    op.drop_table('triage_results')
    op.drop_table('message_logs')
    op.drop_table('scheduled_messages')
    op.drop_table('enrollments')
    op.drop_table('follow_up_templates')
    op.drop_table('patients')
    op.drop_table('users')
    
    # Drop enums
    op.execute('DROP TYPE IF EXISTS userrole CASCADE')
    op.execute('DROP TYPE IF EXISTS messagestatus CASCADE')
    op.execute('DROP TYPE IF EXISTS messagedirection CASCADE')
    op.execute('DROP TYPE IF EXISTS risklevel CASCADE')
    op.execute('DROP TYPE IF EXISTS alertchannel CASCADE')
    op.execute('DROP TYPE IF EXISTS alertstatus CASCADE')
