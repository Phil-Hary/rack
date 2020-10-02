import React from 'react';

const DetailsSvg = ({ isActive }) => {
	return(
		<svg width="120" height="44" viewBox="0 0 178 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0)">
				<path d="M24.0005 0.859375C36.4271 0.859375 47.063 10.6089 47.063 22C47.063 33.3911 36.4271 43.1406 24.0005 43.1406C19.5792 43.1406 14.906 41.9546 11.4277 39.9351L0.937988 43.1406L4.43494 33.525C2.23181 30.3369 0.937988 26.0528 0.937988 22C0.937988 10.6089 11.5739 0.859375 24.0005 0.859375Z" fill={isActive ? "#00BFFC" : "#81858a"} />
				<path d="M28.688 30.5938V34.0312H19.313V30.5938H21.188V22H19.313V18.5625H26.813V30.5938H28.688Z" fill={isActive ? "white" : "#81858a"} />
				<path d="M26.813 12.5469C26.813 13.9709 25.554 15.125 24.0005 15.125C22.4474 15.125 21.188 13.9709 21.188 12.5469C21.188 11.1232 22.4474 9.96875 24.0005 9.96875C25.554 9.96875 26.813 11.1232 26.813 12.5469Z" fill={isActive ? "white" : "#81858a"} />
				<path d="M38.6255 11.6875C38.6255 12.1618 39.0455 12.5469 39.563 12.5469C40.0804 12.5469 40.5005 12.1618 40.5005 11.6875C40.5005 11.2132 40.0804 10.8281 39.563 10.8281C39.0455 10.8281 38.6255 11.2132 38.6255 11.6875Z" fill={isActive ? "black" : "#81858a"} />
				<path d="M42.3754 22C42.3754 23.1007 42.255 24.1995 42.0177 25.2656C41.914 25.7306 42.2414 26.1844 42.7486 26.2794C42.812 26.2915 42.875 26.2972 42.9372 26.2972C43.3734 26.2972 43.7641 26.0162 43.8549 25.6094C44.1175 24.4301 44.2505 23.2159 44.2505 22C44.2505 19.294 43.6103 16.69 42.3472 14.2603C42.1246 13.8319 41.5654 13.65 41.0977 13.8541C40.6301 14.0582 40.432 14.5711 40.6546 14.9998C41.7965 17.1966 42.3754 19.5518 42.3754 22V22Z" fill={isActive ? "black" : "#81858a"} />
				<path d="M28.688 29.7344H27.7505V18.5625C27.7505 18.0878 27.3308 17.7031 26.813 17.7031H19.313C18.7952 17.7031 18.3755 18.0878 18.3755 18.5625V22C18.3755 22.4747 18.7952 22.8594 19.313 22.8594H20.2505V29.7344H19.313C18.7952 29.7344 18.3755 30.1191 18.3755 30.5938V34.0312C18.3755 34.5059 18.7952 34.8906 19.313 34.8906H28.688C29.2058 34.8906 29.6255 34.5059 29.6255 34.0312V30.5938C29.6255 30.1191 29.2058 29.7344 28.688 29.7344ZM27.7505 33.1719H20.2505V31.4531H21.188C21.7058 31.4531 22.1255 31.0684 22.1255 30.5938V22C22.1255 21.5253 21.7058 21.1406 21.188 21.1406H20.2505V19.4219H25.8755V30.5938C25.8755 31.0684 26.2955 31.4531 26.813 31.4531H27.7505V33.1719Z" fill={isActive ? "black" : "#81858a"} />
				<path d="M24.0005 15.9844C26.0681 15.9844 27.7505 14.4422 27.7505 12.5469C27.7505 10.6516 26.0681 9.10938 24.0005 9.10938C21.9329 9.10938 20.2505 10.6516 20.2505 12.5469C20.2505 14.4422 21.9329 15.9844 24.0005 15.9844ZM24.0005 10.8281C25.0343 10.8281 25.8755 11.5992 25.8755 12.5469C25.8755 13.4945 25.0343 14.2656 24.0005 14.2656C22.9667 14.2656 22.1255 13.4945 22.1255 12.5469C22.1255 11.5992 22.9667 10.8281 24.0005 10.8281Z" fill={isActive ? "black" : "#81858a"} />
				<path d="M24 0C11.0647 0 4.08825e-05 10.1235 4.08825e-05 22C4.08825e-05 26.0569 1.26823 30.3712 3.40653 33.6345L0.0480145 42.869C-0.0640461 43.1776 0.0234784 43.5183 0.274699 43.7482C0.527018 43.9795 0.899089 44.0584 1.23417 43.9557L11.3083 40.8774C14.8678 42.8378 19.5744 44 24 44C36.9386 44 48 33.8752 48 22C48 10.1396 36.9551 0 24 0V0ZM24 42.2812C19.7546 42.2812 15.2421 41.1328 11.929 39.2093C11.6943 39.073 11.4017 39.0371 11.1307 39.12L2.41996 41.7817L5.32365 33.7969C5.413 33.5519 5.37712 33.2833 5.22624 33.0651C3.12785 30.0284 1.87504 25.8917 1.87504 22C1.87504 11.0064 12.007 1.71875 24 1.71875C35.9931 1.71875 46.125 11.0064 46.125 22C46.125 32.9936 35.9931 42.2812 24 42.2812Z" fill={isActive ? "black" : "#81858a"} />
			</g>
			<path d="M71.354 12.12C73.8867 12.12 75.6943 12.758 76.777 14.034C77.5697 15.0007 77.966 16.209 77.966 17.659C77.966 18.181 77.9177 18.732 77.821 19.312L76.69 25.779C76.3033 27.9637 75.356 29.7133 73.848 31.028C72.34 32.3427 70.3873 33 67.99 33H59.551L63.234 12.12H71.354ZM69.527 16.644H67.642L65.583 28.476H68.338C69.2467 28.476 69.9523 28.2343 70.455 27.751C70.977 27.2483 71.3347 26.4363 71.528 25.315L72.369 20.559C72.4463 20.1337 72.485 19.747 72.485 19.399C72.485 17.5623 71.499 16.644 69.527 16.644ZM93.5084 33H78.9504L82.6334 12.12H97.1914L96.3794 16.644H87.0414L86.3744 20.559H94.0884L93.2764 25.083H85.5624L84.9824 28.476H94.3204L93.5084 33ZM117.526 16.644H110.392L107.521 33H102.272L105.143 16.644H97.9799L98.7919 12.12H118.338L117.526 16.644ZM125.694 33L125.868 28.447H121.025L119.604 33H114.065L121.518 12.12H131.088L131.204 33H125.694ZM124.505 17.195L122.214 24.561H126.013L126.332 17.195H124.505ZM142.851 12.12L139.197 33H133.948L137.631 12.12H142.851ZM156.518 33H143.294L146.977 12.12H152.197L149.326 28.476H157.33L156.518 33ZM164.381 27.055C164.381 28.389 165.338 29.056 167.252 29.056C169.185 29.056 170.152 28.4567 170.152 27.258C170.152 26.62 169.823 26.098 169.166 25.692C168.509 25.286 167.706 24.9477 166.759 24.677C165.831 24.4063 164.893 24.097 163.946 23.749C163.018 23.3817 162.225 22.821 161.568 22.067C160.911 21.2937 160.582 20.3367 160.582 19.196C160.582 14.3433 163.704 11.917 169.949 11.917C172.23 11.917 173.951 12.352 175.111 13.222C176.29 14.0727 176.88 15.2617 176.88 16.789C176.88 17.3497 176.803 17.891 176.648 18.413C176.513 18.9157 176.368 19.2733 176.213 19.486L175.981 19.834H170.848C171.273 19.3893 171.486 18.8287 171.486 18.152C171.486 16.8953 170.664 16.267 169.021 16.267C166.952 16.267 165.918 16.9243 165.918 18.239C165.918 18.8963 166.247 19.4183 166.904 19.805C167.561 20.1917 168.354 20.501 169.282 20.733C170.229 20.9457 171.177 21.2163 172.124 21.545C173.071 21.8737 173.874 22.4247 174.531 23.198C175.188 23.952 175.517 24.938 175.517 26.156C175.517 28.6113 174.782 30.4383 173.313 31.637C171.844 32.8163 169.582 33.406 166.527 33.406C163.472 33.406 161.384 32.8647 160.263 31.782C159.432 30.97 159.016 29.8487 159.016 28.418C159.016 27.8767 159.074 27.287 159.19 26.649L159.277 26.185H164.497L164.439 26.533C164.4 26.7263 164.381 26.9003 164.381 27.055Z" fill={isActive ? "#00BFFC" : "#81858a"} />
			<defs>
				<clipPath id="clip0">
					<rect width="48" height="44" fill="white"/>
				</clipPath>
			</defs>
		</svg>

	);
}

export default DetailsSvg;
