import Link from "next/link"

async function fetchCourses() {
    const response = await fetch("http://localhost:3000/api/courses")
    const courses = await response.json()
    return courses
}

const Courses = async () => {
    const courses = await fetchCourses()

    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <h3>{course.title}</h3>
                    <small>Level: { course.level }</small>
                    <p>{ course.description }</p>
                    <Link href={course.link} target="_blank">Go To Course</Link>
                </div>
            ))}
        </div>
    )
}

export default Courses