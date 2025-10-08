<template>
  <div class="callback-container">
    <div class="spinner"></div>
    <p>處理登入中...</p>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const router = useRouter()

onMounted(async () => {
  // Supabase will handle the OAuth callback automatically
  // and set the session. We just need to redirect to home.
  const { data } = await supabase.auth.getSession()
  
  if (data.session) {
    // User is logged in, redirect to home
    router.push('/')
  } else {
    // No session, redirect to home anyway
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }
})
</script>

<style scoped>
.callback-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.callback-container p {
  font-size: 18px;
  font-weight: 500;
}
</style>
