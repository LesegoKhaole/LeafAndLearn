// app.js

const courses = {
    firstAid: {
        title: "First Aid",
        description: "Learn to save lives—because 'I Googled it' won't cut it in an emergency!",
        additionalInfo: "This course covers CPR, basic first aid techniques, and how to handle emergencies effectively.",
        historicalInfo: "First aid has been practiced for centuries, evolving with medical advancements.",
        image: "image/firstAid.jpg", // Path to the first aid image
        image2: "image/firstAid.jpg",
        footerInfo: [
            "Footer information related to First Aid.",
            "Important updates for First Aid course participants.",
            "FAQs about the First Aid course."
        ]
    },
    sewing: {
        title: "Sewing",
        description: "Sewing: because sometimes you just need to turn 'I can't wear this anymore' into 'Look what I made!'",
        additionalInfo: "Learn basic stitches, fabric types, and how to create your own designs.",
        historicalInfo: "Sewing has a rich history, dating back thousands of years and evolving with fashion trends.",
        image: "images/sewing.jpg", // Path to the sewing image
        footerInfo: [
            "Footer information related to Sewing.",
            "Important updates for Sewing course participants.",
            "FAQs about the Sewing course."
        ]
    },
    landscaping: {
        title: "Landscaping",
        description: "Digging in the dirt—it's like therapy, but cheaper and you get a garden!",
        additionalInfo: "This course teaches planting, garden design, and maintenance.",
        historicalInfo: "Landscaping has roots in ancient civilizations, where gardens were symbols of wealth.",
        image: "images/landscaping.jpg", // Path to the landscaping image
        footerInfo: [
            "Footer information related to Landscaping.",
            "Important updates for Landscaping course participants.",
            "FAQs about the Landscaping course."
        ]
    },
    lifeSkills: {
        title: "Life Skills",
        description: "Adulting: where the only thing harder than paying bills is pretending you know what you're doing!",
        additionalInfo: "Covers budgeting, cooking, and essential home maintenance skills.",
        historicalInfo: "Life skills training has gained recognition as essential for personal development.",
        image: "images/life-skills.jpg", // Path to the life skills image
        footerInfo: [
            "Footer information related to Life Skills.",
            "Important updates for Life Skills course participants.",
            "FAQs about the Life Skills course."
        ]
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
        document.getElementById('additional-info').textContent = course.additionalInfo;
        document.getElementById('historical-info').textContent = course.historicalInfo;
        document.getElementById('course-image').src = course.image; // Set the image source
        document.getElementById('course-image2').src = course.image2;

        const footerInfoElements = document.querySelectorAll('#footer-info-1, #footer-info-2, #footer-info-3');
        footerInfoElements.forEach((element, index) => {
            if (course.footerInfo[index]) {
                element.textContent = course.footerInfo[index];
            }
        });

        // Trigger animations
        document.querySelectorAll('.autoShow').forEach(el => {
            el.classList.add('active');
        });
    } else {
        document.getElementById('course-title').textContent = 'Course not found';
        document.getElementById('course-description').textContent = '';
        document.getElementById('additional-info').textContent = '';
        document.getElementById('historical-info').textContent = '';
        document.getElementById('course-image').src = ''; // Clear the image source
    }
}

// Call the function to display course details on page load
if (document.title === "Course Details") {
    displayCourseDetails();
}