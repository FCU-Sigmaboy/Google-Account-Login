<template>
  <div class="container">
    <header class="header">
      <div class="logo">Google Account Login</div>
      <button class="login-button" @click="openModal">
        註冊 / 登入
      </button>
    </header>
    
    <main class="main-content">
      <div v-if="user" class="welcome-section">
        <h1>歡迎回來！</h1>
        <div class="user-info">
          <img v-if="user.user_metadata?.avatar_url" :src="user.user_metadata.avatar_url" alt="User Avatar" class="avatar" />
          <p class="user-name">{{ user.user_metadata?.full_name || user.email }}</p>
          <p class="user-email">{{ user.email }}</p>
        </div>
        <button class="logout-button" @click="signOut">
          登出
        </button>
      </div>
      
      <div v-else class="welcome-section">
        <h1>歡迎使用 Google 帳號登入系統</h1>
        <p class="subtitle">請點擊右上角的「註冊 / 登入」按鈕開始</p>
      </div>
    </main>
    
    <LoginModal :is-open="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const isModalOpen = ref(false)
const user = ref<any>(null)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const signOut = async () => {
  await supabase.auth.signOut()
  user.value = null
}

// Check for existing session on mount
onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  user.value = data.session?.user || null
  
  // Listen for auth changes
  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null
    if (session?.user) {
      closeModal()
    }
  })
})
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.login-button {
  padding: 10px 24px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 40px 20px;
}

.welcome-section {
  text-align: center;
  color: white;
}

.welcome-section h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 20px;
  opacity: 0.9;
}

.user-info {
  margin: 32px 0;
  padding: 32px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  display: inline-block;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.user-name {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.user-email {
  font-size: 16px;
  opacity: 0.9;
}

.logout-button {
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.logout-button:hover {
  background: white;
  color: #667eea;
}
</style>
