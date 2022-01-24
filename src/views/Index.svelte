<script>
  import { Link } from "svelte-routing";

  // core components
  import IndexNavbar from "../components/Navbars/IndexNavbar.svelte";
  import Footer from "../components/Footers/Footer.svelte";

  const patternVue = "/assets/img/pattern_svelte.png";
  const componentBtn = "/assets/img/component-btn.png";
  const componentProfileCard = "/assets/img/component-profile-card.png";
  const componentInfoCard = "/assets/img/component-info-card.png";
  const componentInfo2 = "/assets/img/component-info-2.png";
  const componentMenu = "/assets/img/component-menu.png";
  const componentBtnPink = "/assets/img/component-btn-pink.png";
  const documentation = "/assets/img/documentation.png";
  const login = "/assets/img/login.jpg";
  const profile = "/assets/img/profile.jpg";
  const landing = "/assets/img/landing.jpg";
  const banner = "/assets/img/banner.jpg";
  // export let location;
</script>

<IndexNavbar />
<section class="header relative items-center flex h-screen" style="z-index: -999; background-image: url('{banner}'); background-size: cover;">
  <div class="container mx-auto items-center flex flex-wrap" style="">
    <div class="w-full">
      <div class="sm:pt-0 pl-10">
        <h1 class="font-semibold text-black-600 mt-16 text-left" style="font-size:70px;">          
          Holaa 
          <span style="display: inline-block; backface-visibility: hidden; transform: translate(0px, 0px) rotate(0deg) scale(1);">👋</span>, 
          I'm Khafido Ilzam
          <br>A Software Engineer.
        </h1>
        <!-- <br> <br>        
        <h1 class="font-semibold text-white" style="font-size:70px; margin-top:-70px;">
        </h1> -->
        <!-- <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
          Notus Svelte is Free and Open Source. It does not change any of the CSS from
          <a
            href="https://tailwindcss.com/?ref=creativetim"
            class="text-blueGray-600"
            target="_blank"
          >
            Tailwind CSS.
          </a>
          It features multiple HTML elements and it comes with dynamic
          components for ReactJS, Vue and Angular.
        </p> -->
      </div>
    </div>
  </div>
</section>

<section class="mt-36 md:mt-32 pb-20 relative">
  <!-- <div
    class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-blueGray-100 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div> -->
  <div class="container mx-auto">
    <div class="flex flex-wrap items-center">
      <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
          <img
            alt="..."
            src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                class="text-white fill-current"
              ></polygon>
            </svg>
            <h4 class="text-xl font-bold text-black">
              Nice to see you!
            </h4>
            <p class="text-md font-light mt-2 text-black">
              My name is Khafido Ilzam, i'm a software engineer. Interested about Backend Developer. Familiar with PHP, Golang, and NodeJS.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="w-full md:w-6/12 px-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 px-4">
            <div class="relative flex flex-col mt-4">
              <div class="px-4 py-5 flex-auto">                
                <div class="rounded-sm text-center mt-1">
                  <img
                    alt="..."
                    class="rounded-full max-w-full w-10"
                    src="https://image.flaticon.com/icons/png/512/1158/1158166.png"
                  />
                </div>                                          
                <h6 class="text-xl mt-4 font-semibold">
                  Backend Roadmap
                </h6>
                <p class="mb-4 text-blueGray-500">
                  My journey learning Backend. I learn about Internet, Basic Frontend, Operating System, Backend Language, Database, API, Caching, Testing, Container, etc.
                </p>
              </div>
            </div>            
            <div class="relative flex flex-col min-w-0">
              <div class="px-4 py-5 flex-auto">
                <div class="rounded-sm text-center mt-1">
                  <img
                    alt="..."
                    class="rounded-full max-w-full w-12"
                    src="https://image.freepik.com/free-vector/artists-painting-abstract-picture-with-paintbrush-oil-paint-work-tiny-persons-drawing-with-digital-tools-flat-vector-illustration-virtual-master-class-online-workshop-creation-concept_74855-21648.jpg"
                  />
                </div>                                          
                <h6 class="text-xl mt-4 font-semibold">
                  Portfolio
                </h6>
                <p class="mb-4 text-blueGray-500">
                  Contains some of the work I've done, such as building API endpoints and database management.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 px-4">
            <div class="relative flex flex-col min-w-0 mt-4">
              <div class="px-4 py-5 flex-auto">                
                <div class="rounded-sm text-center">
                  <img
                    alt="..."
                    class="rounded-full max-w-full w-12"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOAHEZaJ6bvi7p3lCTUB7bSWOii9FX0QQjfps5vxRzt-ZtPOTJRoNUONj3lfUvVwVB5A&usqp=CAU"
                  />
                </div>                          
                <h6 class="text-xl mt-3 font-semibold">
                  Golang Roadmap
                </h6>
                <p class="mb-4 text-blueGray-500">
                  Golang (Google Language) is one of Programming Language for Backend Developer. I learn about Data Types, Loop, Function, Package, Import, Export, etc.
                </p>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="px-4 py-5 flex-auto">                
                <div class="rounded-sm text-center">
                  <img
                    alt="..."
                    class="rounded-full max-w-full w-12"
                    src="https://as2.ftcdn.net/v2/jpg/01/02/63/41/1000_F_102634176_wpDMfLZmDfsn3RKVkVTae6rkOmZmsZuf.jpg"
                  />
                </div>                          
                <h6 class="text-xl mt-3 font-semibold">
                  My Blog
                </h6>
                <p class="mb-4 text-blueGray-500">
                  I wrote several articles about programming, problems I've had, and my daily progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><br>
  <hr>
  <div class="justify-center text-center flex flex-wrap mt-12">    
    <div class="w-full md:w-6/12 px-12 md:px-4">      
      <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
      <!-- <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
        Find us on any of these platforms, we respond 1-2 business days.
      </h5> -->
      <div class="mt-6 lg:mb-0 mb-6">
        <button
          class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i class="fab fa-twitter"></i>
        </button>
        <button
          class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i class="fab fa-facebook-square"></i>
        </button>
        <button
          class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i class="fab fa-dribbble"></i>
        </button>
        <button
          class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- <Footer /> -->
