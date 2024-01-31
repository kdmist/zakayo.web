<script> 
                        
    import Footer from "./Footer.svelte"
    
</script>
            
            
<div class="mt-10 md:text-5xl  text-4xl text-center">
    <h1
            class="poppins my-1 whitespace-nowrap text-zinc-800 text-opacity-100 leading-none font-semibold"
        >
            Contact <span
            class="poppins text-center my-1 whitespace-nowrap text-red-500 text-opacity-100 leading-none font-semibold"
        >
            Us?
        </span>
     </h1>
      
        
</div>
    
<section class="mb-32 mx-2">
    
    <!-- container -->
                
    
        <div class="lg:flex rounded-3xl shadow-lg max-w-7xl mx-auto mt-10 bg-white lg:px-16 lg:py-16 px-5 py-6 gap-10  items-center">
                <div class="w-full poppins lg:w-1/2">
                    <form action="" class="lg:px-10">
                        <p class="text-2xl font-semibold mb-2 text-red-500">Get In Touch With Us!</p>
                        <p class="lg:text-lg text-black-600 mb-4">We are here for you! How can we help?</p>
            
                        <div class="mb-4 mt-10 text-left">
                            <label class="mt-4 mb-2" for="name">Name</label> <br>
                            <input type="text" id="name" class="p-3 mt-3  rounded-xl border-2 w-full border-red-400">
                        </div>
            
                        <div class="mb-4 text-left">
                            <label for="email">Email</label> <br>
                            <input type="text" id="email" class="p-3 mt-3  rounded-xl border-2 w-full border-red-400">
                        </div>
            
                        <div class="mb-4 text-left">
                            <label for="message">Message</label> <br>
                            <textarea id="message"  rows=3 class="p-3 mt-3  rounded-xl border-2 w-full border-red-400"></textarea>
                        </div>
    
            
                        <!-- Submit Button -->
                        <button type="submit"
                                class="block poppins group transition ease-in-out duration-150 w-full px-12 py-3.5 text-md lg:text-lg text-center text-white font-semibold bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-gray-600 rounded-md mt-20"
                                >Submit </button
                            >
                        </form>
                    </div>
            
                    <div class="w-full poppins lg:w-1/2 mt-10 lg:mt-0">
                        <img src="man.png" class="w-full lg:w-[70%] lg:block hidden "  alt="contact-pic" />
                        <div class="flex mt-4 mb-6 items-center">
                        <p class="text-red-500"><i class="fa-solid fa-location-dot "></i> </p>                           
                        <p class="  ml-4">Nairobi, Kenya</p>
                    </div>

                    <div class="flex mb-6 items-center">
                        <p class="text-red-500"><i class="fa-solid fa-phone"></i></p>
                        <p class=" ml-4">+254 720 977 467</p>
                    </div>

                    <div class="flex mb-6 items-center">
                        <p class="text-red-500"><i class="fa-solid fa-envelope"></i></p>
                        <p class=" ml-4">info@zakayo.ke</p>
                    </div>
            </div>
        </div>
        
    
    
    </section>
    
<Footer/>    
