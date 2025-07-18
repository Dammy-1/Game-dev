"use client";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Star, Clock, Apple, Smartphone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-blue-500 via-sky-700 to-sky-800">
        {/* Header */}
        <header className="flex items-center justify-between px-6 lg:px-20 py-10 relative z-20">
          <div className="text-5xl font-bold text-white ps-10">GD.</div>

          <nav className="hidden md:flex items-center space-x-17 text-xl font-bold px-5">
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Our Work
            </a>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-8 rounded-[26px] font-bold text-xl">Enrol Now</Button>
          </nav>
          {/* Mobile Menu Icon */}
          <div className="md:hidden pe-10">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
            </button>
          </div>
        </header>
{/* Mobile Fullscreen Dark Overlay Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <a href="#" className="text-white hover:text-gray-300 text-3xl font-semibold">About</a>
          <a href="#" className="text-white hover:text-gray-300 text-3xl font-semibold">Services</a>
          <a href="#" className="text-white hover:text-gray-300 text-3xl font-semibold">Our Work</a>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-7 rounded-3xl text-lg font-semibold">
            Enrol Now
          </Button>
        </div>
        {/* Hero Section */}
        <main className="px-6 lg:px-12 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Learn the art of Game Dev
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg">
                This is a comprehensive course on Game Development. You will learn everything from generating an idea to
                publishing your games to different platforms.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-7 rounded-3xl text-lg font-semibold inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Enrol Now
              </Button>
            </div>
            {/* Right Content - Image and Stats */}
            <div className="relative">
              {/* Student Image Placeholder */}
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto h-96 lg:h-[500px] backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Image src="/student.png" width={500} height={100} alt="Student photo" className="absolute -mb-3" />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <Card className="absolute top-8 -left-4 lg:-left-8 bg-white shadow-lg z-20 px-7 py-0 rounded-3xl">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-slate-800">32K</div>
                  <div className="text-sm text-slate-600 mt-1">Students Enrolled</div>
                </CardContent>
              </Card>

              <Card className="absolute bottom-20 -left-4 -mx-13 lg:-left-8 bg-white shadow-lg z-20 px-4 py-0 rounded-3xl">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-2xl lg:text-3xl font-bold text-slate-800">4.7</span>
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-sm text-slate-600">Overall Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-50 py-34 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Testimonials Timeline */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-50 top-0 bottom-0 w-6 rounded-2xl bg-slate-700"></div>
              
              <div className="space-y-12">
                {/* First Testimonial */}
                <div className="relative pr-35 pl-15 mt-7">
                  <Card className="bg-white shadow-xl/30 border-0 rounded-3xl overflow-hidden relative">
                    <CardContent className="p-0">
                      {/* Speech Bubble */}
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 text-white rounded-t-3xl absolute top-0 left-0 right-0 rounded-b-3xl z-0">
                        <p className="text-lg leading-relaxed font-bold">
                          This is a great course. It helped me a lot. Thank you :)
                        </p>
                      </div>
                      {/* Profile Section */}
                      <div className="relative z-10 p-10 -mb-7 flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-extrabold pt-13 text-slate-800">Jane Cooper</h4>
                          <p className="text-slate-600">Developer, Sony</p>
                        </div>
                        {/* Circular Image on Right */}
                        <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image src="/woman.jpg" alt="Profile" width={300} height={300} className="object-cover w-full h-full"/>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Second Testimonial */}
                <div className="relative pl-30 pr-20 mb-7">
                  <Card className="bg-white shadow-xl/30 border-0 rounded-3xl overflow-hidden relative">
                    <CardContent className="p-0">
                      {/* Speech Bubble */}
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white rounded-t-3xl rounded-b-3xl absolute top-0 left-0 right-0 z-0">
                        <p className="text-lg leading-relaxed font-bold">Amazing Work! Well done!</p>
                      </div>

                      {/* Profile Section */}
                      <div className="relative z-10 p-10 -mb-6 -mt-6 flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-extrabold text-slate-800 pt-13">Jacob Jones</h4>
                          <p className="text-slate-600">Designer, Facebook</p>
                        </div>
                        <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image src="/man.jpg" alt="Profile" width={300} height={300} className="object-cover w-full"/>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight">What our students say</h2>

              <div className="space-y-3 text-slate-600">
                <p className="text-lg leading-relaxed">
                  All students get access to all the videos and also the source code of the projects.
                </p>

                <p className="text-lg leading-relaxed">
                  You will also have access to a private Discord channel where you can discuss your doubts.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-7 rounded-3xl text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Courses Section */}
      <div className="bg-gradient-to-b from-sky-500 via-sky-800 to-sky-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-16">Our Courses</h2>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-20 mb-12">
            {/* Game Design Essentials Course */}
            <Card className="bg-white rounded-3xl overflow-hidden shadow-xl border-0">
              <CardContent className="p-0">
                {/* Course Image */}
                <div className="w-5/6 m-auto -mt-6 shadow-2xl rounded-3xl">
                  <Image src="/mario.jpg" alt="Mario"width={500} height={300} className="rounded-3xl"/>
                </div>
                
                {/* Course Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-extrabold text-slate-800 leading-tight">Game Design Essentials</h3>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-extrabold">8 HRS</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unity Game Engine Course */}
            <Card className="bg-white rounded-3xl overflow-hidden shadow-xl border-0">
              <CardContent className="p-0">
                {/* Course Image */}
                <div className="w-5/6 m-auto -mt-6 shadow-2xl rounded-3xl">
                  <Image src="/ps4.jpg" alt="Ps4" width={500} height={300}className="rounded-3xl"/>
                </div>

                {/* Course Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-extrabold text-slate-800 leading-tight">
                      Unity Game Engine
                      <br />
                      Fundamentals
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-extrabold">8 HRS</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Courses Button */}
          <div className="flex justify-end">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-7 rounded-3xl text-lg font-semibold"
            >
              All Courses
            </Button>
          </div>
        </div>
      </div>
      {/* Get Our App Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Get our App</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            You can use our App for better experience on smartphones
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* App Store Button */}
            <a
              href="#"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-4 transition-colors min-w-[200px]"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold">App Store</span>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-4 transition-colors min-w-[200px]"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white"/>
              </div>
              <span className="text-lg font-semibold">Google Play</span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Course */}
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-6">Course</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Log In
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    All Courses
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-6">Contact Us</h3>
              <div className="space-y-6">
                <p className="text-gray-300">contact@email.com</p>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>

                {/* Newsletter Signup */}
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white text-slate-900 border-0 rounded-lg flex-1"
                  />
                  <Button className="bg-slate-700 hover:bg-slate-600 text-white px-6 rounded-lg">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8">
            <p className="text-gray-400 text-sm">This website is developed by AGBI © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
