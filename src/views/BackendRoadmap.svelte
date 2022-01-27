<script>
  import { Link } from "svelte-routing";

  // core components
  import IndexNavbar from "../components/Navbars/IndexNavbar.svelte";
  import Footer from "../components/Footers/Footer.svelte";

  // export let location;
</script>

<IndexNavbar />
<section class="relative">
  <div class="w-6/8 container mx-auto">
    <div class="flex items-center">      
      <h1 class="text-4xl px-8 text-right" style="margin-top: -140px;">Backend Roadmap</h1>  
      <div class="grid grid-cols-1">
      <span class="text-2xl font-semibold font-sans" style="margin-top: 100px; margin-left: -30px;">January, 2022</span><br>
      <ol class="relative border-l border-gray-200 dark:border-gray-700 px-4">        
          <li class="mb-10" style="margin-left: -26px;">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                /></svg>
            </span>
            <div class="container pl-8">
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Browser
                <!-- <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  New
                </span> -->
              </h3>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 27th, 2022
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.
              </p>
            </div>
          </li>
          <li class="mb-10" style="margin-left: -26px;">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                /></svg>
            </span>
            <div class="container pl-8">
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                What is HTTP?
              </h3>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 27th, 2022
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.
              </p>
            </div>
          </li>
          <li class="mb-10" style="margin-left: -26px;">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                /></svg>
            </span>
            <div class="container pl-8">
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                How does the internet work?
              </h3>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 27th, 2022
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.
              </p>
            </div>
          </li>
        </ol>      
    
      </div>
    </div>          
  </div>
</section>

<section class="mt-36 md:mt-32 pb-20 relative">
  <Footer />
</section>
