import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { Course } from '@/types';

interface PopularCoursesProps {
  courses: Course[];
}

const PopularCourses: React.FC<PopularCoursesProps> = ({ courses }) => {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Popüler Kurslar</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">İlgi Alanlarında Uzmanlaş</h2>
          </div>
          <button className="flex items-center gap-2 text-[#263562] font-semibold hover:text-blue-600 transition">
            Tüm Kursları İncele <ArrowRight size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;