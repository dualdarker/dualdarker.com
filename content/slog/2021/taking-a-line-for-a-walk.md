---
title: "Taking a Line for a Walk"
date: 2021-02-18T12:56:13-08:00
publishDate: 2021-02-13T12:56:13-08:00
draft: false
tags: ["generative", "js", "canvas", "process"]
layout: "gallery"
---

<div class="main">
	<p><strong>To begin again</strong>, my laying in bed query was <em>“draw a line that changes color when it crosses itself”</em>.</p>
	<p>Seems simple enough.</p>
	<p>Let’s see where it leads <span style="color:#f98b89;">→</span><span style="color:#4b7937;">→</span><span style="color:#ececae;">→</span><span style="color:#dd2cb4;">→</span>  <span style="color:#bbdcf6;">→</span>  <span style="color:#22e9c8;">→</span><span style="color:#943510;">→</span>    <span style="color:#a14ff3;">→</span></p>
</div>
	<!--more-->
<div class="main">
	<p class="sidenote">( I’m post-facto adding the process info since I didn't track my thoughts as I was making. The following is sort of what I remember thinking about as I took screenshots. )</p>
</div>

<h2>Process</h2>
<div class="image_gallery process_grid">
	<time datetime="2021-02-13">2021 Feb 13 →</time>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_13-07_00_00-line_crossing.png"><img alt="" src="img-sm/2021_02_13-07_00_00-line_crossing.png"></a>
		<figcaption>First <span class="assess">(?)</span> attempt <br>
			<span class="assess">Doesn’t always change color at crossing tho</span>
		</figcaption>
	</figure>
	<figure>
		<p class="attempt">let it run for longer...</p>
		<a class="img-link" title="open image" href="img/2021_02_13-08_13_00-line_crossing.png"><img alt="" src="img-sm/2021_02_13-08_13_00-line_crossing.png"></a>
		<figcaption class="assess">a <a href="https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator">bowl of oatmeal</a></figcaption>
	</figure>
	<figure>
		<p class="attempt">tweak the sensitivity</p>
		<a class="img-link" title="open image" href="img/2021_02_13-08_49_00-line_crosssing-multi.png"><img alt="" src="img-sm/2021_02_13-08_49_00-line_crosssing-multi.png"></a>
		<figcaption class="assess">color changes too aggressively (due to poor way I’m judging if line is crossed)</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_13-08_54_00-line_crosssing-multi.png"><img alt="" src="img-sm/2021_02_13-08_54_00-line_crosssing-multi.png"></a>
		<figcaption class="assess">Ultimately just becomes an RGB static noise generator.</figcaption>
	</figure>
	<div class="text_block idea">
		<p><cite>Floaters</cite> (color & b/w)</p>
	</div>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_13-09_01_00-seuss_tendrils_idea.png"><img alt="" src="img-sm/2021_02_13-09_01_00-seuss_tendrils_idea.png"></a>
		<figcaption>Lots of instances of lines while playing with the width. <br>
			<span class="assess">I like the tentacles feel, but the colors become too "random"</span></figcaption>
	</figure>
	<time datetime="2021-02-13">2021 Feb 15 →</time>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_15-11_32_00-lines_crosing_width_changes.png"><img alt="" src="img-sm/2021_02_15-11_32_00-lines_crosing_width_changes.png"></a>
		<figcaption>shift the width only once in a while<br>
			<span class="assess">nice wormy shapes. 5-8 good colors is nice succinct palette to stay at.</span></figcaption>
	</figure>
	<div class="text_block idea">
		<p>Flowing worm(s)</p>
	</div>
	<figure>
		<p class="attempt">fade out the lines as they draw</p>
		<a class="img-link" title="open image" href="img/2021_02_15-11_51_00-not_quite_full_alpha.png"><img alt="" src="img-sm/2021_02_15-11_51_00-not_quite_full_alpha.png"></a>
		<figcaption>If you fade out the entire image each frame, the canvas alpha blending algorithm doesn't go all the way to 0 opacity. <span class="assess">see <a href="http://rectangleworld.com/blog/archives/871">Dan Gries post</a> for a fix</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_15-19_04_00-circle_sizing.png"><img alt="" src="img-sm/2021_02_15-19_04_00-circle_sizing.png"></a>
		<figcaption>more tentacles, but lessened the color change. <span class="idea">to explore further</span></figcaption>
	</figure>
	<time datetime="2021-02-13">2021 Feb 16 →</time>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_16-05_49_00-large_canvas_test.png"><img alt="" src="img-sm/2021_02_16-05_49_00-large_canvas_test.png"></a>
		<figcaption>Pretty close to where I ended up I suppose.<br>
			<span class="assess">squiggly line is not super appealing</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_16-08_40_10-straighter_lines.png"><img alt="" src="img-sm/2021_02_16-08_40_10-straighter_lines.png"></a>
		<figcaption class="assess">straighter lines give a nicer, less gen-art feel</figcaption>
	</figure>
	<div class="text_block idea">
		<p>Color changes to color of line line you crossed.</p>
			<ul>
				<li>after 𝑥 number of random colors</li>
				<li>set up some short starter lines</li>
			</ul>
	</div>
	<figure>
		<p class="attempt">branch at every crossing</p>
		<a class="img-link" title="open image" href="img/2021_02_16-13_26_20-straight_lines_multiplier.png"><img alt="" src="img-sm/2021_02_16-13_26_20-straight_lines_multiplier.png"></a>
		<figcaption class="assess">not what I intended, but a nice coding error</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_16-13_51_10-canvas.png"><img alt="" src="img-sm/2021_02_16-13_51_10-canvas.png"></a>
		<figcaption class="assess">branching gets outta hand real quick. <span class="idea">maybe limit to 𝑥 number of crossings then stop?</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_16-17_31_50-canvas.png"><img alt="" src="img-sm/2021_02_16-17_31_50-canvas.png"></a>
		<figcaption class="assess">straighter is better</figcaption>
	</figure>
	<div class="text_block assess">
		<p>Alone, these are ok, but not “works” and should be thought of as parts to be used in a larger system</p>
	</div>
	<time datetime="2021-02-13">2021 Feb 17 →</time>
	<figure>
		<p class="attempt">what about dotted lines?</p>
		<a class="img-link" title="open image" href="img/2021_02_17-04_55_19-canvas.png"><img alt="" src="img-sm/2021_02_17-04_55_19-canvas.png"></a>
		<figcaption>Edge “tiling” code shows it’s faults. <span class="assess">but in a really nice way.</span> <span class="idea">to explore</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-04_59_11-canvas.png"><img alt="" src="img-sm/2021_02_17-04_59_11-canvas.png"></a>
		<a class="img-link" title="open image" href="img/2021_02_17-04_59_27-canvas.png"><img alt="" src="img-sm/2021_02_17-04_59_27-canvas.png"></a>
		<a class="img-link" title="open image" href="img/2021_02_17-04_59_57-canvas.png"><img alt="" src="img-sm/2021_02_17-04_59_57-canvas.png"></a>
		<a class="img-link" title="open image" href="img/2021_02_17-05_05_55-canvas.png"><img alt="" src="img-sm/2021_02_17-05_05_55-canvas.png"></a>
		<figcaption>letting the error play itself out</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-09_21_46-site.png"><img alt="" src="img-sm/2021_02_17-09_21_46-site.png"></a>
		<figcaption>Applied to the <a href="/">site home</a></figcaption>
	</figure>
	<figure>
		<p class="attempt">change width (grow/shrink) at every crossing</p>
		<a class="img-link" title="open image" href="img/2021_02_17-19_48_19-canvas.png"><img alt="" src="img-sm/2021_02_17-19_48_19-canvas.png"></a>
		<figcaption class="assess">Seems to want to trend towards the largest width</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-19_56_06-canvas.png"><img alt="" src="img-sm/2021_02_17-19_56_06-canvas.png"></a>
		<figcaption>reduced the line width to nothing from time to time</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-19_58_03-canvas.png"><img alt="" src="img-sm/2021_02_17-19_58_03-canvas.png"></a>
		<figcaption class="assess">straighter is better again - I do like the little bits of excessive color shifting at the crossings</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-20_15_59-canvas.png"><img alt="" src="img-sm/2021_02_17-20_15_59-canvas.png"></a>
		<figcaption>keep it greys, <span class="assess">meh</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-20_35_52-canvas.png"><img alt="" src="img-sm/2021_02_17-20_35_52-canvas.png"></a>
		<figcaption>all black... <span class="assess">nah</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-20_39_59-canvas.png"><img alt="" src="img-sm/2021_02_17-20_39_59-canvas.png"></a>
		<figcaption>single color with shadow adds depth <span class="assess">starting to go somewhere</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-20_42_49-canvas.png"><img alt="" src="img-sm/2021_02_17-20_42_49-canvas.png"></a>
		<figcaption class="assess">colors take on a diffeent feel with the added depth</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-20_58_21-canvas.png"><img alt="" src="img-sm/2021_02_17-20_58_21-canvas.png"></a>
		<figcaption>messing with shadows that are way too big & offset?? <span class="assess">Nice coloring as result (a bit <a href="https://badbadbadbad.com/">Bráulio</a> feeling?)</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-20_59_28-canvas.png"><img alt="" src="img-sm/2021_02_17-20_59_28-canvas.png"></a>
		<figcaption>a little more distinct shadow size</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-21_00_06-canvas.png"><img alt="" src="img-sm/2021_02_17-21_00_06-canvas.png"></a>
		<a class="img-link" title="open image" href="img/2021_02_17-21_02_47-canvas.png"><img alt="" src="img-sm/2021_02_17-21_02_47-canvas.png"></a>
		<a class="img-link" title="open image" href="img/2021_02_17-21_10_34-canvas.png"><img alt="" src="img-sm/2021_02_17-21_10_34-canvas.png"></a>
		<figcaption>reducing it further and offsetting based on angle of movement <span class="assess">gives an entangled feel. needs more intention in how shadow interacts though</span></figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_17-21_05_41-canvas.png"><img alt="" src="img-sm/2021_02_17-21_05_41-canvas.png"></a>
		<a class="img-link" title="open image" href="img/2021_02_17-21_06_48-canvas.png"><img alt="" src="img-sm/2021_02_17-21_06_48-canvas.png"></a>
		<figcaption>white shadows <span class="assess">not feeling it, poor overlapping</span></figcaption>
	</figure>
	<time datetime="2021-02-13">2021 Feb 18 →</time>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_18-04_43_51-canvas.png"><img alt="" src="img-sm/2021_02_18-04_43_51-canvas.png"></a>
		<figcaption>using a different brush to draw the line <br>
			<span class="assess">the horizontal brush with mostly vertical lines has good feel. again, shadow intentionality is needed</span> <span class="idea">to explore further</span></figcaption>
	</figure>
</div>

<!--
<div class="image_gallery process_grid">
	<time datetime="2021-02-13">2021 Month 13</time>
	<div class="text_block">
		<p class="idea">An Idea for Later</p>
		<p>Longer general thoughts you know?</p>
	</div>
	<figure>
		<p class="attempt">attempting</p>
		<img alt="" src="/img/result.png">
		<figcaption>description <span class="assess">assessment</span></figcaption>
	</figure>
</div>
 -->
<!--
<h2>Outputs</h2>
<div class="image_gallery output_grid">
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_13-07_00_00-line_crossing.png" width="600"><img alt="" src="img-sm/2021_02_13-07_00_00-line_crossing.png" width="600"></a>
		<figcaption>Description</figcaption>
	</figure>
	<figure>
		<a class="img-link" title="open image" href="img/2021_02_13-07_00_00-line_crossing.png" width="600"><img alt="" src="img-sm/2021_02_13-07_00_00-line_crossing.png" width="600"></a>
		<figcaption>Description</figcaption>
	</figure>
</div>
 -->
