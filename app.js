// app.js

const courses = {
    firstAid: {
        title: "First Aid",
        description: "Learn to save lives—because 'I Googled it' won't cut it in an emergency!",
    },
    sewing: {
        title: "Sewing",
        description: "Sewing: because sometimes you just need to turn 'I can't wear this anymore' into 'Look what I made!'",
    },
    landscaping: {
        title: "Landscaping",
        description: "Digging in the dirt—it's like therapy, but cheaper and you get a garden!",
    },
    lifeSkills: {
        title: "Life Skills",
        description: "Adulting: where the only thing harder than paying bills is pretending you know what you're doing!",
    }
};

// Function to get course parameter from URL
function getCourseFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('course');
}

// Display course details on detail.html
function displayCourseDetails() {
    const courseKey = getCourseFromUrl();
    const course = courses[courseKey];

    if (course) {
        document.getElementById('course-title').textContent = course.title;
        document.getElementById('course-description').textContent = course.description;
    } else {
        document.getElementById('course-title').textContent = 'Course not found';
        document.getElementById('course-description').textContent = '';
    }
}

// Call the function to display course details on page load
if (document.title === "Course Details") {
    displayCourseDetails();
}