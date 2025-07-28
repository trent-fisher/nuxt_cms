<template>
	<nav class="fixed top-0 left-0 right-0 z-50">
		<div class="flex justify-between items-center px-4 py-4 md:px-10 bg-black">

			<!-- Logo -->
			<a href="/">
				<img src="https://tft-azizi-luxury-developments.s3.af-south-1.amazonaws.com/azizi-luxury-developments-logos/company-logo-AzizLuxuryDevelopments.png"
					class="md:h-24 h-16 inline-block" alt="">
			</a>

			<!-- Hamburger Menu (Mobile Only) -->
			<button @click="handler" class="md:hidden relative w-16 h-16 flex items-center justify-center z-50">
				<div class="hamburger-menu" :class="{ 'open': toggle }">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			<!-- Desktop Nav -->
			<div class="nav pt-6 font-light">
				<ul class="nav-links flex space-x-8 text-white montserrat md:text-lg">
					<li v-for="(link, index) in navLinks" :key="index"
						:class="['text-center', activeMenu === link.link ? 'active' : '']">
						<NuxtLink :to="link.link" class="link-hover">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>

		<!-- Drawer Sidebar -->
		<!-- <Drawer v-model:visible="toggle" position="right" :modal="true" :dismissable="true" :showCloseIcon="false"
			class="md:hidden w-3/4" @hide="onDrawerHide">

			<div class="relative h-full flex flex-col items-center pt-32">

				<img src="/assets/images/global/concrete-background.jpg" alt=""
					class="absolute inset-0 w-full h-full object-cover" style="z-index: -1;" />

				<div class="space-y-8 text-white text-xl frank-ruhl-libre z-10">
					<p v-for="(link, index) in navLinks" :key="index" class="uppercase">
						<NuxtLink :to="link.link" @click="handler">{{ link.name }}</NuxtLink>
					</p>
				</div>

				<div class="mt-auto flex flex-col items-center space-y-2 mb-6 text-white text-center z-10">
					<p class="text-lg">
						CRAFTING LUXURY<br>BUILDING DREAMS.
					</p>
					<p class="pt-8 text-xs">Copyright © 2024 Azizi Luxury Developments. All rights reserved.</p>
				</div>
			</div>

		</Drawer> -->
<!-- 
		<Drawer v-model:visible="toggle" position="right" :modal="true" :dismissable="true" :showCloseIcon="true">
			<template #container="{ closeCallback }">
				   
				<div class="relative h-full flex flex-col items-center pt-32">

					<img src="/assets/images/global/concrete-background.jpg" alt=""
						class="absolute inset-0 w-full h-full object-cover" style="z-index: -1;" />

					<div class="space-y-8 text-white text-xl frank-ruhl-libre z-10">
						<p v-for="(link, index) in navLinks" :key="index" class="uppercase">
							<NuxtLink :to="link.link" @click="handler">{{ link.name }}</NuxtLink>
						</p>
					</div>
 
					<div class="mt-auto flex flex-col items-center space-y-2 mb-6 text-white text-center z-10">
						<p class="text-lg">
							CRAFTING LUXURY<br>BUILDING DREAMS.
						</p>
						<p class="pt-8 text-xs">Copyright © 2024 Azizi Luxury Developments. All rights reserved.</p>
					</div>
				</div>
			</template>
		</Drawer> -->


		<!-- Background Overlay -->
		<!-- <transition name="slide">
			<div v-if="toggle" class="md:hidden fixed inset-0 bg-black opacity-50 z-30" @click="handler"></div>
		</transition> -->

		<!-- Mobile Sidebar -->
		<!-- <transition name="slide">
			<div v-if="toggle" id="sidebar"
				class="md:hidden fixed top-0 right-0 h-full w-3/4 z-40 flex flex-col items-center pt-32">

				<img src="/assets/images/global/concrete-background.jpg" alt=""
					class="absolute inset-0 w-full h-full object-cover" style="z-index: -1;" />

				<div class="space-y-8 text-white text-xl frank-ruhl-libre">
					<p v-for="(link, index) in navLinks" :key="index" class="uppercase">
						<NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
					</p>
				</div>

				<div class="mt-auto flex flex-col items-center space-y-2 mb-6 text-white text-center">
					<p class="text-lg">
						CRAFTING LUXURY<br>BUILDING DREAMS.
					</p>
					<p class="pt-8 text-xs">Copyright © 2024 Azizi Luxury Developments. All rights reserved.</p>
				</div>
			</div>
		</transition>

  -->


	</nav>


</template>

<script lang="ts" setup>
const toggle = ref(false)
const activeMenu = ref('')

const handler = () => {
	toggle.value = !toggle.value
}

const onDrawerHide = () => {
	toggle.value = false
}

const router = useRouter()

onMounted(() => {
	activeMenu.value = window.location.pathname
})

const navLinks = ref([
	{ name: 'Home', link: '/' },
	{ name: 'About Us', link: '/about-us' },
	{ name: 'Services', link: '/services' },
	{ name: 'Projects', link: '/projects' },
	{ name: 'Contact Us', link: '/contact-us' },
])
</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
	transform: translateX(0%);
}
</style>