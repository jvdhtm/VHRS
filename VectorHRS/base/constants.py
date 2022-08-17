# Create your views here.
STATUS_CHOICES = (
    ('activated', 'activated'),
    ('deactivated', 'deactivated'),
    ('pending', 'pending'),
    ('confirmed', 'confirmed'),
    ('archived', 'archived'),
)

SEVERITY_CHOICES = (
    ('small', 'small'),
    ('mild', 'mild'),
    ('sever', 'sever'),
)

SHAPE_CHOICES = (
    ('circle', 'circle'),
    ('square', 'square'),
    ('rectangle', 'rectangle'),
    ('triangle', 'triangle'),
)

PERSON_STEP_CHOICES = (
    ('communication', 'communication'),
    ('answers', 'answers'),
    ('pending', 'pending'),
    ('interview', 'interview'),
    ('contract', 'contract'),
    ('rejection', 'rejection'),
    ('refusal', 'refusal'),
    ('recommendation', 'recommendation'),
    ('questions', 'questions'),
    ('invitations', 'invitations'),
)

STAFF_STEP_CHOICES = (
    ('communication', 'communication'),
    ('answers', 'answers'),
    ('meeting', 'meeting'),
    ('surveys', 'surveys'),
    ('administrative', 'administrative'),
    ('complains', 'complains'),
    ('problems', 'problems'),
    ('feedBack', 'feedBack'),
    ('requirements', 'requirements'),
    ('legal', 'legal'),
    ('questions', 'questions'),
    ('gifts', 'gifts'),
    ('invitations', 'invitations'),
)