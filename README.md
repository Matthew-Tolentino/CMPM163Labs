# CMPM163Labs
Labs for CMPM 163 Computer Graphics

Video: https://drive.google.com/open?id=1vSHDsyowr0fyHhjxGg9DJ0-n_ee-_6Vi

![](lab2/Lab2Part2.png)

-------------------------------------------------------------------------------

Lab3

Video: https://drive.google.com/open?id=15LU04VW5fbpUmwzZfEzrOG7zBfPK1-rU

Far Left Cube: Used THREE.js to create material using MeshNormalMaterial and setting flatshading to true.

Middle Cube: Followed the instructions for Part2 about specular highlighting using the Phong model.

Top Cube: Created a new Fragment shader and changed the interpolation based on the y
 	 coordinate. Copied over AddCoolCube's code in a new method and played around
	 with Hex values to create an interesting color pallete.
	 
Right Cube: Followed the instructions in Part2 in order to create custom fragment and vertex shaders.

-------------------------------------------------------------------------------

Lab4

a. x = u * 7

b. y = v * 7

c. (.375, .25) = white

Video: https://drive.google.com/open?id=1cjkWZiBdLsYQRBpk_kvqRc3E8wHFQAx6

Middle Cube: Followed instructions from lab and implemented textures using three.js texture functionality.
	    Also utilized the normal map for dynamic lighting.

Left Cube: Basically created the same as the middle cube but without a normal map.

Right Cube: Created textures through loading custom shaders by following the directions.

Top Cube: The same as the right cube however, I utilized a different texture and made extra calculations
  	 in the fragment shader to map the uv in a tiled format. I solved this by using these equations:  
 	    if (u < .5) ? u = u * 2 : u = (u-.5) * 2;  
	    if (v < .5) ? v = v * 2 : v = (v-.5) * 2;  
	 by utilizing these equations I got the correct uv coordinates to send to gl_FragColor.

-------------------------------------------------------------------------------

Lab5

My modifications for this assignment inclues adding in particle systems by following the tutorial, changing
the color of the particles by using the unity interface, adding in new models that were in the asset folder
of the project but not used, and changing the material of the checkpoints by creating a new materical in the
unity interface and playing around with the settings. 

-------------------------------------------------------------------------------

Lab6

Spotlight - A flashlight. Point in a direction based on rotation and illuminate all objects within its cone.
Directional Light - The sun. Effects all the objects in the scene lighting them based on direction set by its
		    rotation.
Point light - A bare lightbulb. Illuminates objects in the scene based on its position in the scene and shines
	      equally in all directions.
Area light - Only work when baking a light map. Shines in all directions to one side of a rectangular plane

Real Life Material - For this I decided to make the material for my deoderant cap which is a reddish opaque 
		    material. To make this in unity I created a new material and changed its color to closely 
		    that of the cap and then gave it a metallic alpha. After that I set its metallic variable
 		    to zero since its not metalic at all and then played with its transparency to make it look
		    vaguely opaque.

Textures - For the textures I created a brick wall and a pile of wood. For the brick wall I created a material 
	  with a diffuse shader so that light will spread evenly on it. However on the wood pile I applied a
	  specular shader to try and give it a shiny wood finish property.

Skybox - I added in a free skybox from the unity store that gives a faint light almost like the sun has just set. 