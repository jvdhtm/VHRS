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

# Hiring/Pipeline Choices
POSITION_STATUS_CHOICES = (
    ('vacant', 'Vacant'),
    ('hiring', 'Hiring'),
    ('filled', 'Filled'),
    ('archived', 'Archived'),
)

HIRING_STAGE_CHOICES = (
    ('job_posted', 'Job Posted'),
    ('applications', 'Applications'),
    ('screening', 'Screening'),
    ('interview_1', 'Interview 1'),
    ('interview_2', 'Interview 2'),
    ('offer', 'Offer'),
    ('hired', 'Hired'),
    ('rejected', 'Rejected'),
)

EMPLOYMENT_TYPE_CHOICES = (
    ('full_time', 'Full Time'),
    ('part_time', 'Part Time'),
    ('contract', 'Contract'),
    ('internship', 'Internship'),
)

# Leave/Calendar Choices
LEAVE_TYPE_CHOICES = (
    ('vacation', 'Vacation'),
    ('sick', 'Sick Leave'),
    ('parental', 'Parental Leave'),
    ('remote', 'Remote Work'),
    ('business_travel', 'Business Travel'),
)

LEAVE_STATUS_CHOICES = (
    ('pending', 'Pending'),
    ('approved', 'Approved'),
    ('rejected', 'Rejected'),
)

# Survey Choices
SURVEY_TYPE_CHOICES = (
    ('engagement', 'Engagement'),
    ('performance', 'Performance'),
    ('exit', 'Exit'),
    ('custom', 'Custom'),
)

QUESTION_TYPE_CHOICES = (
    ('rating', 'Rating'),
    ('text', 'Text'),
    ('multiple_choice', 'Multiple Choice'),
    ('boolean', 'Yes/No'),
)