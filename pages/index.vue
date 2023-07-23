<template>
    <section id="home" class="min-h-screen flex items-center justify-center border-b border-white">
        <div class="container mx-auto px-5 mt-20">
            <div class="flex flex-col lg:flex-row items-center gap-y-5 sm:gap-y-20 lg:justify-between py-5">
                <!-- <img src="https://avatars.githubusercontent.com/u/129625436?v=4" alt=""
                    class="  "> -->
                <div class="img relative p-3 sm:p-5 lg:p-5">
                    <img src="https://avatars.githubusercontent.com/u/129625436?v=4" alt=""
                        class="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
                </div>
                <div class="w-full lg:w-[50%] xl:w-[60%]">
                    <h2 class="text-[16px] sm:text-[22px] text-white mb-3 sm:mb-5">Hello! My name is <span
                            class="text-[#FF4F00] font-bold">Davlat
                            Jurayev</span></h2>
                    <h1 class="text-[24px] sm:text-[40px] text-white font-bold mb-3 sm:mb-5">I'm <span
                            class="text-[#FF4F00]">Full stack
                            developer</span></h1>
                    <p class="text-white text-[14px] sm:text-[18px]">Lorem ipsum dolor, sit amet consectetur
                        adipisicing
                        elit. Ea quas
                        laboriosam provident, corporis dolor
                        ducimus quos! Nostrum quas qui, non quo culpa laboriosam assumenda cum cumque consequuntur accusamus
                        perferendis quod.</p>
                    <button
                        class="mt-10 sm:mt-20 hover:bg-[#FF4F00] text-white text-[14px] sm:text-[18px] py-3 px-5 rounded-full border-2 border-[#FF4F00]"><a
                            href="Resume.pdf" download="" class="flex items-center gap-2"><i
                                class='bx bxs-download text-[24px]'></i>Download Resume</a></button>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="min-h-screen flex items-center justify-center border-b border-white">
        <div class="container mx-auto px-5 mt-20">
            <div class="py-5">
                <h1 class="about relative text-white text-[26px] sm:text-[30px] font-bold pb-5 mb-10">About me</h1>
                <h2 class="text-white text-[20px] sm:text-[24px] font-bold mb-4">I'm <span class="text-[#FF4F00]">Davlat
                        Jurayev</span> and
                    <span class="text-[#FF4F00]">Full stack developer</span>
                </h2>
                <p class="text-white text-[16px] sm:text-[18px] mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.
                    Perferendis
                    fugiat dignissimos quas, quasi,
                    officiis similique consequatur harum eveniet hic aspernatur tenetur blanditiis labore, explicabo itaque!
                    Repellendus dolorem quas quisquam cumque.
                    Vero aperiam, suscipit quam perspiciatis eius dignissimos, iste debitis eos necessitatibus, numquam
                    voluptates. Libero, cupiditate numquam ullam possimus maiores sint, assumenda, inventore tempore esse et
                    provident alias nostrum laboriosam nam?
                    Repellat iusto corporis culpa aliquid debitis odit labore repudiandae, dolor excepturi suscipit, fugit
                    in perferendis recusandae libero. Quasi quia vitae corrupti. Fuga eius ipsam iure voluptate quam enim
                    eaque soluta.</p>
                <div class="w-full grid gird-cols-1 sm:grid-cols-2 self-stretch gap-x-10 gap-y-10">
                    <div class="w-full bg-[#414141] rounded-lg p-5">
                        <h2 class="text-white text-[20px] sm:text-[24px] border-b-2 border-[#FF4F00] font-bold mb-5 pb-1">
                            Education</h2>
                        <div class="flex flex-col gap-y-2">
                            <div class="flex flex-col gap-y-2 pb-5">
                                <span class="flex items-center gap-2 text-white text-[12px] sm:text-[14px]"><i
                                        class='bx bxs-calendar text-white text-[16px] sm:text-[18px]'></i>Feb 2022 - Jan
                                    2023</span>
                                <h3 class="text-white text-[20px] sm:text-[24px] font-bold">Najot Ta ’lim Education Center
                                </h3>
                                <p class="text-white text-[14px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                    Eius
                                    mollitia dolorem delectus
                                    saepe, eveniet minima vitae, esse laborum dignissimos ullam quasi veniam temporibus,
                                    omnis
                                    architecto labore beatae. Laudantium, porro magni!</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full bg-[#414141] rounded-lg p-5">
                        <h2 class="text-white text-[20px] sm:text-[24px] border-b-2 border-[#FF4F00] font-bold mb-5 pb-1">
                            Scills</h2>
                        <div class="flex flex-wrap items-start gap-y-5 gap-x-5">
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-javascript text-[28px] sm text-[28px]:sm:text-[30px]'
                                    style='color:#e9ff00'></i>
                                JavaScript
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-typescript text-[28px] sm:text-[30px]' style='color:#00a3ff'></i>
                                TypeScript
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-nodejs text-[28px] sm:text-[30px]' style='color:#16bf57'></i>
                                NodeJs
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    class="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px]" viewBox="0 0 48 48">
                                    <path fill="#f50057"
                                        d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"></path>
                                    <path fill="#f50057"
                                        d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z">
                                    </path>
                                    <path fill="#f50057"
                                        d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z">
                                    </path>
                                    <path fill="#f50057"
                                        d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path>
                                    <path fill="#f50057"
                                        d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path>
                                </svg>
                                NestJs
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
                                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                                    xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" aria-label="Vue" role="img"
                                    viewBox="0 0 64 64" version="1.1" id="svg8" sodipodi:docname="vue-icon.svg"
                                    class="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px]"
                                    inkscape:version="0.92.4 (5da689c313, 2019-01-14)">
                                    <metadata id="metadata14">
                                        <rdf:RDF>
                                            <cc:Work rdf:about="">
                                                <dc:format>image/svg+xml</dc:format>
                                                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                                                <dc:title />
                                            </cc:Work>
                                        </rdf:RDF>
                                    </metadata>
                                    <defs id="defs12" />
                                    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1"
                                        objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0"
                                        inkscape:pageshadow="2" inkscape:window-width="1566" inkscape:window-height="855"
                                        id="namedview10" showgrid="false" inkscape:zoom="10.546875" inkscape:cx="32"
                                        inkscape:cy="32" inkscape:window-x="70" inkscape:window-y="27"
                                        inkscape:window-maximized="0" inkscape:current-layer="svg8"
                                        inkscape:pagecheckerboard="true" />
                                    <path d="M 39.33333,5.5 32,18.33333 24.666667,5.5 H 0 L 32,61 64,5.5 Z" id="path4"
                                        inkscape:connector-curvature="0" style="fill:#42b883;stroke-width:0.16666667" />
                                    <path
                                        d="M 39.33333,5.5 32,18.33333 24.666667,5.5 H 12.833333 L 32,38.83333 51.16667,5.5 Z"
                                        id="path6" inkscape:connector-curvature="0"
                                        style="fill:#35495e;stroke-width:0.16666667" />
                                </svg>
                                VueJs
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <svg class="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px]" viewBox="0 0 900 900" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z"
                                        fill="#00DC82" />
                                </svg>
                                NuxtJs
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-mongodb text-[28px] sm:text-[30px]' style='color:#16bf57'></i>
                                MongoDb
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-postgresql text-[28px] sm:text-[30px]' style='color:#3e527f'></i>
                                PostgreSQL
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-html5 text-[28px] sm:text-[30px]' style='color:#ff5d08'></i>
                                HTML
                            </p>
                            <p class="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-bold">
                                <i class='bx bxl-css3 text-[28px] sm:text-[30px]' style='color:#08c1ff'></i>
                                CSS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script></script>

<style lang="css" scoped>
.img::before {
    content: '';
    position: absolute;
    width: 35%;
    height: 35%;
    border-bottom: 5px solid #FF4F00;
    border-left: 5px solid #FF4F00;
    bottom: 0;
    left: 0;
}

.img::after {
    content: '';
    position: absolute;
    width: 35%;
    height: 35%;
    border-top: 5px solid #FF4F00;
    border-right: 5px solid #FF4F00;
    top: 0;
    right: 0;
}

.about::before {
    content: '';
    position: absolute;
    width: 40px;
    border-bottom: 5px solid #FF4F00;
    bottom: 0;
    left: 0;
}

.about::after {
    content: '';
    position: absolute;
    width: 80px;
    border-bottom: 5px solid #FF4F00;
    bottom: 0;
    left: 0;
    margin-bottom: 15px;
}

.scills::before {
    content: '';
    position: absolute;
    height: auto;
    border-left: 2px solid #FF4F00;
    top: 20px;
    left: 20px;
    bottom: 20px;
}
</style>