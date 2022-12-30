import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import ResponsiveTable from "../components/ResponsiveTable";
import styles from "../styles/General.module.css";

export default function Archive() {
	return (
		<PageWrapper text="Archive of">
			<Head>
				<title>FISSION :: Archive</title>
			</Head>
			<div className={styles.content}>
				<h1>Archive</h1>
				<hr />
				<h2>FISSION 2022 Awards</h2>
				<ResponsiveTable>
					<thead>
						<tr>
							<td>Category</td>
							<td>Award</td>
							<td>Project Name</td>
							<td>Project Author(s)</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan={3}>
								Physical Sciences and Engineering
							</td>
							<td>Best in Category (Model)</td>
							<td>DC Explorer</td>
							<td>Momchil Kolev, Victor Ivanov</td>
						</tr>
						<tr>
							<td>Best in Category (Experiment)</td>
							<td>Coin in a Balloon</td>
							<td>Denitsa Vasileva</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>Denim cycle</td>
							<td>
								Veronika Stefanova Tsoneva, Aderean Miroslavov
								Velinov
							</td>
						</tr>
						<tr>
							<td rowSpan={2}>
								Biomedical, Biological, and Chemical Sciences
							</td>
							<td>Best in Category</td>
							<td>
								Analysis of The Effect of Antioxidants On the
								Efficiency of a Bioenergy Drink
							</td>
							<td>Antoana Tsekova</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>
								The Effects of Different Aspirins on Salivary
								Amylase’s Function
							</td>
							<td>Kalina Duncheva, Bogdan Nalbanski</td>
						</tr>
						<tr>
							<td>Ecology and Environmental Science</td>
							<td>Best in Category</td>
							<td>
								OLIVE WASTES - natural heavy metal absorbents
							</td>
							<td>Erblin Jakupi, Alba Deari</td>
						</tr>
						<tr>
							<td rowSpan={2}>Computer Science</td>
							<td>Best in Category</td>
							<td>
								Swarm Guiding and Communication System (SGCS)
							</td>
							<td>Kaloyan Dimitrov</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>Braille Reader App</td>
							<td>Mihaela Tzvetkova, Yasen Horozov</td>
						</tr>
						<tr>
							<td>Mathematics</td>
							<td>Best in Category</td>
							<td>
								Fixed systems of the Shapley-Shubik index with
								one or two presidents
							</td>
							<td>Demira Georgieva Nedeva</td>
						</tr>
						<tr>
							<td>Junior</td>
							<td>Best in Category</td>
							<td>No Wasting Sink</td>
							<td>Aslı Sarac</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<hr />
				<h2>FISSION 2021 Awards</h2>
				<ResponsiveTable>
					<thead>
						<tr>
							<td>Category</td>
							<td>Award</td>
							<td>Project Name</td>
							<td>Project Author(s)</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan={2}>
								Physical Sciences and Engineering
							</td>
							<td>Best in Category</td>
							<td>ROV - Remotely Operated Underwater Vehicle</td>
							<td>Momchil Kolev, Victor Ivanov</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>Apprehension Of Dark Matter</td>
							<td>Marija Miloshevska</td>
						</tr>
						<tr>
							<td rowSpan={3}>
								Biomedical, Biological, and Chemical Sciences
							</td>
							<td>Best Project in Chemical Sciences</td>
							<td>Herbal Soap</td>
							<td>Antoana Tsekova</td>
						</tr>
						<tr>
							<td>Best Model in Biological Sciences</td>
							<td>Let&apos;s Learn About Hearing</td>
							<td>Ema Doneva, Boyko Yanchev</td>
						</tr>
						<tr>
							<td>Best Experiment in Biological Sciences</td>
							<td>
								Determining a Suitable Protein Environment for
								Bioengineered Hearts
							</td>
							<td>Vladimir Genkovski, Neda Piperova</td>
						</tr>
						<tr>
							<td>Ecology and Environmental Science</td>
							<td>Best in Category</td>
							<td>
								Recycling Unsuccessful 3D Prints: Analysis of
								Converting 3D Printed Objects Back Into Filament
							</td>
							<td>Ognian Trajanov, Boris Topalov</td>
						</tr>
						<tr>
							<td>Computer Science</td>
							<td>Best in Category</td>
							<td>
								Limited Query Black-Box Adversarial Attacks in
								the Real World
							</td>
							<td>Hristo Todorov</td>
						</tr>
						<tr>
							<td>Mathematics</td>
							<td>Honorable Mention</td>
							<td>Tossing a Coin (Probability)</td>
							<td>Vladimir Donchev, Teodor Tankov</td>
						</tr>
						<tr>
							<td rowSpan={3}>Junior</td>
							<td>Best in Category</td>
							<td>Tesla Coil</td>
							<td>Ioan Mut Vitcu, David Rusu</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>
								How Does the Surface Temperature Affect the
								Fingerprints?
							</td>
							<td>Beatrice Capriș, Erika Capriș</td>
						</tr>
						<tr>
							<td>Audience Choice Award</td>
							<td>
								How does the shape of ice affect its melting
								speed?
							</td>
							<td>Caroline Man</td>
						</tr>
						<tr>
							<td>All non-junior</td>
							<td>Audience Choice Award</td>
							<td>
								AMP Smart Mug - Eco-friendly, 3D Printed Mug w/
								Solar powered Wireless Charger
							</td>
							<td>Andreja Popovikj, Matej Milosievski</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<hr />
				<h2>FISSION 2020 Online Format Awards</h2>
				<ResponsiveTable>
					<thead>
						<tr>
							<td>Category</td>
							<td>Award</td>
							<td>Popular Vote %</td>
							<td>Project Name</td>
							<td>School</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan={3}>Junior</td>
							<td>1st Place</td>
							<td>24.4</td>
							<td>How Does Diet Affect Your pH?</td>
							<td>Avenor College, Romania</td>
						</tr>
						<tr>
							<td>2nd Place</td>
							<td>22.4</td>
							<td>Solar Oven</td>
							<td>Avenor College, Romania</td>
						</tr>
						<tr>
							<td>3rd Place</td>
							<td>17.3</td>
							<td>Tin Can Calculator</td>
							<td>Avenor College, Romania</td>
						</tr>
						<tr>
							<td rowSpan={3}>Model</td>
							<td>1st Place</td>
							<td>18.9</td>
							<td>Chemical vs Organic Fertilizers</td>
							<td>American College of Sofia, Bulgaria</td>
						</tr>
						<tr>
							<td>2nd Place</td>
							<td>15.3</td>
							<td>Wind Power</td>
							<td>American College of Sofia, Bulgaria</td>
						</tr>
						<tr>
							<td>3rd Place</td>
							<td>14.2</td>
							<td>Robotic Princess</td>
							<td>American College of Sofia, Bulgaria</td>
						</tr>
						<tr>
							<td rowSpan={3}>Experiment</td>
							<td>1st Place</td>
							<td>39.7</td>
							<td>Variable Stars</td>
							<td>Fryganiotis College, Greece</td>
						</tr>
						<tr>
							<td>2nd Place</td>
							<td>17.1</td>
							<td>Eco-friendly & Safe Way of Writing</td>
							<td>Yahya Kemal College, North Macedonia</td>
						</tr>
						<tr>
							<td>3rd Place</td>
							<td>13.8</td>
							<td>Electric Arc Cutter</td>
							<td>Avenor College, Romania</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<hr />
				<h2>FISSION 2019 Awards</h2>
				<ResponsiveTable>
					<thead>
						<tr>
							<td>Category</td>
							<td>Award</td>
							<td>Project Number</td>
							<td>Project Name</td>
							<td>School</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan={3}>Physics</td>
							<td>Honorable Mention</td>
							<td>5</td>
							<td>
								Acoustic properties and resonance of bottles and
								test tubes
							</td>
							<td>Sofia High School of Mathematics</td>
						</tr>
						<tr>
							<td>Best Experiment</td>
							<td>15</td>
							<td>Electromagnetic Field Detector EMF_GHOST</td>
							<td>133 High School A.S. Poushkin</td>
						</tr>
						<tr>
							<td>Best Model</td>
							<td>46</td>
							<td>The Stroboscopic Effect</td>
							<td>American College of Sofia</td>
						</tr>
						<tr>
							<td rowSpan={4}>Math and IT</td>
							<td>Honorable Mention</td>
							<td>6</td>
							<td>Tesseract</td>
							<td>National Trade and Banking School</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>7</td>
							<td>Poncelet&apos;s closure theorem</td>
							<td>
								Mathematics High School &quot;Academician Sergey
								Korolev&quot; Blagoevgrad
							</td>
						</tr>
						<tr>
							<td>Best Experiment</td>
							<td>18</td>
							<td>Cake</td>
							<td>
								Math and Science High School &quot;St. Kliment
								Ohridski&quot;
							</td>
						</tr>
						<tr>
							<td>Best Model</td>
							<td>10</td>
							<td>
								Exogenous Finance Factor in the Capital Asset
								Pricing Model
							</td>
							<td>Sofia High School of Mathematics</td>
						</tr>
						<tr>
							<td rowSpan={4}>Biology</td>
							<td>Honorable Mention</td>
							<td>3</td>
							<td>Not Only Because It&apos;s Tasty (NOBIT)</td>
							<td>Baba Tonka High School of Mathematics</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>44</td>
							<td>
								The effect of coloured lights on plant growth
							</td>
							<td>American College of Sofia</td>
						</tr>
						<tr>
							<td>Best Experiment</td>
							<td>35</td>
							<td>
								Extrasensory perception: does it exist under
								different conditions
							</td>
							<td>Sofia High School of Mathematics</td>
						</tr>
						<tr>
							<td>Best Model</td>
							<td>45</td>
							<td>ARM</td>
							<td>American College of Sofia</td>
						</tr>
						<tr>
							<td rowSpan={2}>Chemistry</td>
							<td>Honorable Mention</td>
							<td>25</td>
							<td>
								Advantages and disadvantages of charcoal water
								purifiers
							</td>
							<td>
								4th Language School &quot;Frédéric
								Joliot-Curie&quot;
							</td>
						</tr>
						<tr>
							<td>Best Project</td>
							<td>43</td>
							<td>Transparent Wood</td>
							<td>American College of Sofia</td>
						</tr>
						<tr>
							<td rowSpan={4}>Juniors</td>
							<td>Honorable Mention</td>
							<td>21</td>
							<td>Microbit Car</td>
							<td>Paths School</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>31</td>
							<td>Leaf Pen</td>
							<td>
								Private School &quot;Educational
								Technologies&quot;
							</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>42</td>
							<td>Green Roof House</td>
							<td>Paths School</td>
						</tr>
						<tr>
							<td>Best Project</td>
							<td>33</td>
							<td>
								How does the shape of the blade affect how much
								energy a wind turbines produces
							</td>
							<td>Avenor College</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<hr />
			</div>
		</PageWrapper>
	);
}
