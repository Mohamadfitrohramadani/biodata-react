import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <div class="wrapper row1">
  <header id="header" class="hoc clear">
    {/* <div id="logo" class="fl_left"> 
    
      <h1 class="logoname"><a href="index.html">Chill<span>a</span>id</a></h1>
    
    </div> */}
    <nav id="mainav" class="fl_right"> 
    
      <ul class="clear">
        <li class="active"><a href="#home"><i class="fas fa-home"></i></a></li>
        <li><a href="#about"><i class="fas fa-user-tie"></i></a></li>
        <li><a href="#pend"><i class="fas fa-graduation-cap"></i></a></li>
      </ul>
    
    </nav>
  </header>
<div class="wrapper row3" id="home">
  <section id="testimonials" class="hoc container clear"> 
  <div class="sectiontitle">
    <img src="images/6.jpg" alt="" class="rounded-image"/>
    <h6 class="heading font-x2">Mohammad Fitroh Ramadani</h6>
    <p class="nospace font-xs">+62-896-2715-9368</p>
    <p class="nospace font-xs">Saya sebenarnya ultraman</p>
    <div class="social-icons">
        <a href="#" target="_blank" class="icon"><i class="fab fa-youtube"></i></a>
        <a href="#" target="_blank" class="icon"><i class="fab fa-instagram"></i></a>
        <a href="#" target="_blank" class="icon"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank" class="icon"><i class="fab fa-facebook"></i></a>
        <a href="#" target="_blank" class="icon"><i class="fab fa-tiktok"></i></a>
    </div>
</div>

    <article class="one_half first" >
     
      <blockquote><h6>Saya merupakan siswa dari SMK Negeri 6 Jember jurusan Rekayasa Perangkat Lunak dan ini adalah project pertama saya menggunakan React.</h6></blockquote>
    </article>
    <ul class="pr-charts nospace group center" id="about">
      <li class="pr-chart-ctrl" data-animate="false">
        <div class="pr-chart" data-percent="80"><i></i></div>
        <h6>Web Development</h6>
      </li>
      <li class="pr-chart-ctrl" data-animate="false">
        <div class="pr-chart" data-percent="80"><i></i></div>
        <h6>UI/UX Design</h6>
      </li>
      <li class="pr-chart-ctrl" data-animate="false">
        <div class="pr-chart" data-percent="70"><i></i></div>
        <h6>Desain Grafis</h6>
      </li>
      <li class="pr-chart-ctrl" data-animate="false">
        <div class="pr-chart" data-percent="65"><i></i></div>
        <h6>Photography</h6>
      </li>
    </ul>
  </section>
</div>
<div class="wrapper row3">
  <section class="hoc container clear"> 
    <ul id="latest" class="nospace group">
      <li class="one_third first">
        <article><a class="imgover" href="#"><img src="images/1.jpg" alt=""/></a>
          <ul class="nospace meta clear">
            <li><i class="fas fa-user"></i> <a href="#">Admin</a></li>
            <li><i class="fas fa-comments"></i> <a href="#">Comments (1198)</a></li>
          </ul>
          <div class="excerpt">
            <time datetime="2045-04-05T08:15+00:00">18 Desember 2023 </time>
            <p class="heading"><a href="#">Gelar Karya SMK Negeri 6 Jember dari jurusan Rekayasa Perangkat Lunak</a></p>
          </div>
        </article>
      </li>
      <li class="one_third">
        <article><a class="imgover" href="#"><img src="images/4.jpg" alt=""/></a>
          <ul class="nospace meta clear">
            <li><i class="fas fa-user"></i> <a href="#">Admin</a></li>
            <li><i class="fas fa-comments"></i> <a href="#">Comments (1105)</a></li>
          </ul>
          <div class="excerpt">
            <time datetime="2045-04-04T08:15+00:00">04 Maret 2023</time>
            <p class="heading"><a href="#">Pengurus OSIS Tahun Pelajaran 2021-2023</a></p>
          </div>
        </article>
      </li>
      <li class="one_third">
        <article><a class="imgover" href="#"><img src="images/3.jpg" alt=""/></a>
          <ul class="nospace meta clear">
            <li><i class="fas fa-user"></i> <a href="#">Admin</a></li>
            <li><i class="fas fa-comments"></i> <a href="#">Comments (2978)</a></li>
          </ul>
          <div class="excerpt">
            <time datetime="2045-04-03T08:15+00:00">03 Apr 2023</time>
            <p class="heading"><a href="#">Foto bersama dengan Team OK dari jurusan Rekayasa Perangkat Lunak</a></p>
          </div>
        </article>
      </li>
    </ul>
   
  </section>
</div>

<div class="row3">
  <section class="hoc container clear"> 
   
  </section>
</div>


<div class="wrapper row3" id="pend">
  <main class="hoc container clear"> 
  <section id="introblocks">
      <ul class="nospace group btmspace-80 elements elements-four">
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-graduation-cap"></i></a>
            <h6 class="heading">TK Dharma Wanita Bangsalsari</h6>
            <p></p>
          </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-graduation-cap"></i></a>
            <h6 class="heading">SDN 1 Bangsalsari</h6>
            <p></p>
          </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-graduation-cap"></i></a>
            <h6 class="heading">MTS Negeri 4 Jember</h6>
            <p></p>
          </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-graduation-cap"></i></a>
            <h6 class="heading">SMK Negeri 6 Jember</h6>
            <p></p>
          </article>
        </li>
      </ul>
    </section>
    
    <div class="clear"></div>
  </main>
</div>
</div>

      </header>
    </div>
  );
}

export default App;
