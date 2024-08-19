import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="bg-white min-h-screen">
      {/* Navbar */}
      <nav class="bg-gray-900 text-white py-4 px-6 sticky top-0 z-10">
        <div class="container mx-auto flex justify-between items-center">
          <a href="/" class="text-xl font-semibold">Zemili Group</a>
          <div class="space-x-4 text-sm">
            <a href="#" class="hover:text-lime-400 transition-colors">Home</a>
            <a href="#" class="hover:text-lime-400 transition-colors">About</a>
            <a href="#" class="hover:text-lime-400 transition-colors">
              Products
            </a>
            <a href="#" class="hover:text-lime-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header class="bg-gray-50 text-gray-900 py-24">
        <div class="container mx-auto text-center px-4">
          <h1 class="text-5xl font-bold mb-6">Welcome to Zemili Group</h1>
          <p class="text-2xl mb-10 text-gray-600">
            Innovative SaaS Solutions for Professional Industries
          </p>
          <a
            href="#products"
            class="bg-lime-500 text-white px-8 py-3 rounded-md font-medium hover:bg-lime-600 transition-colors duration-300 shadow-md"
          >
            Explore Our Products
          </a>
        </div>
      </header>

      {/* Featured Section */}
      <section class="bg-white py-20">
        <div class="container mx-auto text-center px-4">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">
            Empowering Industry SaaS
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Zemili Group is the holding company for three innovative SaaS
            products designed to revolutionize professional workflows in
            investigation, offshore job management, and team ideation.
          </p>
        </div>
      </section>

      {/* Brand Cards Section */}
      <section id="products" class="py-24 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Products
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Card 1 */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <img
                src="/path-to-socgen-ai-image.jpg"
                alt="Socgen.ai"
                class="w-full h-56 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-semibold mb-4 text-gray-900">
                  Socgen.ai
                </h3>
                <p class="text-gray-600 mb-6">
                  AI-powered platform for anonymous online investigations,
                  serving law enforcement, government, journalists, and legal
                  professionals.
                </p>
                <div class="flex justify-between items-center">
                  <a
                    href="https://socgen.ai"
                    class="text-lime-600 hover:text-lime-700 font-medium"
                  >
                    Visit Website
                  </a>
                  <div class="flex space-x-3">
                    <a
                      aria-label="LinkedIn"
                      href="#"
                      class="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      aria-label="Facebook"
                      href="#"
                      class="text-gray-400 hover:text-blue-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Brand Card 2 */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <img
                src="/path-to-opsap-image.jpg"
                alt="Opsap.com"
                class="w-full h-56 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-semibold mb-4 text-gray-900">
                  Opsap.com
                </h3>
                <p class="text-gray-600 mb-6">
                  Offshore career management platform modernising paper
                  logbooks, simplifying logging, and connecting contractors with
                  clients.
                </p>
                <div class="flex justify-between items-center">
                  <a
                    href="https://opsap.com"
                    class="text-lime-600 hover:text-lime-700 font-medium"
                  >
                    Visit Website
                  </a>
                  <div class="flex space-x-3">
                    <a
                      aria-label="LinkedIn"
                      href="#"
                      class="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      aria-label="Facebook"
                      href="#"
                      class="text-gray-400 hover:text-blue-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Brand Card 3 */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
              <img
                src="/path-to-pitchdead-image.jpg"
                alt="Pitchdead.com"
                class="w-full h-56 object-cover"
              />
              <div class="p-8">
                <h3 class="text-2xl font-semibold mb-4 text-gray-900">
                  Pitchdead.com
                </h3>
                <p class="text-gray-600 mb-6">
                  Innovative platform for team ideation, enabling anonymous
                  feedback and efficient iteration through the idea development
                  process.
                </p>
                <div class="flex justify-between items-center">
                  <a
                    href="https://pitchdead.com"
                    class="text-lime-600 hover:text-lime-700 font-medium"
                  >
                    Visit Website
                  </a>
                  <div class="flex space-x-3">
                    <a
                      aria-label="LinkedIn"
                      href="#"
                      class="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      aria-label="Facebook"
                      href="#"
                      class="text-gray-400 hover:text-blue-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" class="bg-white py-24">
        <div class="container mx-auto text-center px-4">
          <h2 class="text-4xl font-bold mb-6 text-gray-900">
            Interested in what we're building?
          </h2>
          <p class="text-xl mb-10 text-gray-600">
            Get in touch to learn more about our innovative SaaS offerings
          </p>
          <a
            href="mailto:contact@zemiligroup.com"
            class="bg-lime-500 text-white px-8 py-3 rounded-md font-medium hover:bg-lime-600 transition-colors duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-24 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Leadership Team
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div class="text-center">
              <div class="w-40 h-40 rounded-full mx-auto mb-6 bg-gray-300 flex items-center justify-center text-gray-600 text-4xl font-bold shadow-md">
                ML
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">
                Mark Longstreath
              </h3>
              <p class="text-gray-600 mt-2">Founding COO</p>
            </div>
            {/* Team Member 2 */}
            <div class="text-center">
              <div class="w-40 h-40 rounded-full mx-auto mb-6 bg-gray-300 flex items-center justify-center text-gray-600 text-4xl font-bold shadow-md">
                SK
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Sean Knowles</h3>
              <p class="text-gray-600 mt-2">Founder & Technical Lead</p>
            </div>
            {/* Team Member 3 */}
            <div class="text-center">
              <div class="w-40 h-40 rounded-full mx-auto mb-6 bg-gray-300 flex items-center justify-center text-gray-600 text-4xl font-bold shadow-md">
                HU
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Huseyin</h3>
              <p class="text-gray-600 mt-2">Founding Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-4">
          <p class="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zemili Group. All rights reserved.
          </p>
          <div class="space-x-6">
            <a href="#" class="hover:text-lime-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" class="hover:text-lime-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
