<script>
  import { Link } from "svelte-routing";

  // core components
  import IndexNavbar from "../components/Navbars/IndexNavbar.svelte";
  import Footer from "../components/Footers/Footer.svelte";

  const banner = "/assets/img/banner.jpg";
  // export let location;
</script>

<IndexNavbar />
<section class="header relative items-center flex h-screen" style="z-index: -999; background-image: url('{banner}'); background-size: cover;">
  <div class="container mx-auto items-center flex flex-wrap" style="">
    <div class="w-full">
      <br><br>      
      <div class="sm:pt-0 pl-10">
        <h1 class="font-semibold text-black-600 mt-16 text-left" style="font-size:70px;">          
          Holaa 
          <span style="display: inline-block; backface-visibility: hidden; transform: translate(0px, 0px) rotate(0deg) scale(1);">👋</span>, 
          I'm Khafido Ilzam
          <br>A Software Engineer.
        </h1>
      </div>
    </div>
  </div>
</section>

<section class="py-20 relative" style="padding:0 10%;">  
  <br><br><br>
  <div class="w-6/8 container mx-auto">
    <div class="flex items-center grid grid-cols-1 sm:grid-cols-2">
      <div class="w-full md:w-1/2 sm:w-1/2 mx-auto mt-32">
        <div class="relative w-3/4 mx-auto sm:w-full flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg">
          <img
            alt="..."
            src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">            
            <h4 class="text-xl font-bold text-black">
              Nice to see you!
            </h4>
            <p class="text-md font-light mt-2 text-black">
              My name is Khafido Ilzam, i'm a software engineer. Interested about Backend Developer. Familiar with PHP, Golang, and NodeJS.
            </p>
          </blockquote>
        </div>
      </div>
      <div class="w-full md:w-1/2 sm:w-1/2 px-4">
        <div class="flex flex-row grid grid-cols-1 md:grid-cols-2">
          <div class="w-full sm:w-1/3 px-4">
            <div class="relative flex flex-wrap mt-4">
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
                  My journey learning Backend. I learn about Internet, Basic Frontend, OS, Backend Language, Database, API, Caching, Testing, Container, etc.
                </p>
              </div>
            </div>            
            <div class="relative flex flex-wrap min-w-0">
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
          <div class="w-full sm:w-3/4 px-4">
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
  <Footer />
</section>

