<template>
  <Navbar />
  <div class="exonomy-design">
    <h1>Exosystems: Join the Future of Sovereign Peer-to-Peer Commerce and Social Media Autonomy</h1>
    <p>Exosystems invites you to join the team of developers who are building the future of sovereign peer-to-peer
      commerce and social media autonomy. A world awaits us without centralized control over our commercial
      interactions and social relationships.</p>

    <h2>Tooling</h2>
    <div class="section-content">
      <ul>
        <li>
          <h3>MVP</h3>
          <ul>
            <li><DropList title="1. SocketSupply runtime" url="https://socketsupply.co"></DropList></li>
            <li><DropList title="2. Nuxt Framework" url="https://nuxt.com"></DropList></li>
            <li><DropList title="3. SQLite3" url="https://www.sqlite.org/"></DropList></li>
            <li>
              <DropList title="3.1. Drizzle ORM, SQLite and Nuxt JS- Getting Started- DEV Community" url="https://www.youtube.com/embed/g6MDN9To9K4/"></DropList>
            </li>
            <li>
              <DropList title="3.2. Connecting to Sqlite Database in Electron JS - (Electron & Databases)" url="https://www.youtube.com/embed/nMvjcBTFlPA/"></DropList>
            </li>
            <li><DropList title="4. VuetifyJS" url="https://vuetifyjs.com"></DropList></li>
          </ul>
        </li>
        <li>
          <h3>Community Nodes</h3>
          <ul>
            <li><DropList title="OrbisDB on Ceramic (IPFS/PostgreSQL)" url="https://developers.ceramic.network/docs/introduction/intro"></DropList></li>
          </ul>
        </li>
        <li>
          <h3>GoViral decentralized app distribution component</h3>
          <ul>
            <li>1. iOS</li>
            <ul>
              <li>1.1. AirDrop</li>
              <li>1.2. Third-Party Apps</li>
            </ul>
            <li>2. Android</li>
            <ul>
              <li>2.1. Nearby Share</li>
              <li>2.2. Wi-Fi Direct</li>
            </ul>
            <li>3. Linux</li>
            <ul>
              <li>3.1. Bluetooth File Transfer</li>
              <li>3.2. Wi-Fi Direct</li>
            </ul>
            <li>4. Windows</li>
            <ul>
              <li>4.1. Bluetooth File Transfer</li>
              <li>4.2. Nearby Sharing</li>
            </ul>
            <li>5. Mac</li>
            <ul>
              <li>5.1. Bluetooth File Transfer</li>
              <li>5.2. Nearby Sharing</li>
            </ul>
            <li>6. Cross-Platform Solutions</li>
            <ul>
              <li>6.1. SHAREit or Xender</li>
              <li>6.2. FTP Server Over Hotspot</li>
              <li>6.3. QRCodeSharing</li>
            </ul>
          </ul>
        </li>
        <li>
          <h3>4. Economic Options</h3>
          <ul>
            <li><DropList title="1. MetaMask (Etherium)" url="https://docs.metamask.io/wallet/concepts/wallet-api/"></DropList></li>
            <li>2. Bitcoin Cash (Bitcoin)</li>
            <li>3. ZCash (Decentralized money)</li>
            <li>4. Stripe (Cash/Credit)</li>
            <li>5. WalletConnect</li>
            <ul>
              <li>5.1. Coinbase (SDK)</li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue';
import DropList from '~/components/DropList.vue';
</script>

<style scoped>

/* Remove default list styling */
.section-content ul {
  list-style-type: none; /* Remove default bullets or numbers */
  margin: 0;
  padding: 0;
}

.section-content li {
  margin-bottom: 10px;
}

/* Indent nested lists */
.section-content ul ul {
  margin-left: 20px; /* Indentation for first level of nested lists */
}

.section-content ul ul ul {
  margin-left: 40px; /* Further indentation for deeper nested lists */
}

/* Optional: Additional styling for DropList component */
.DropList {
  margin: 5px 0;
}

.exonomy-design {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  color: #e0e0e0;
  line-height: 1.6;
  background-color: #1a1a1a;
}

.exonomy-design h1 {
  color: #61dafb;
  font-size: 2.5em;
  border-bottom: 3px solid #61dafb;
  padding-bottom: 15px;
  margin-bottom: 30px;
}

.exonomy-design h2 {
  color: #4fa8d5;
  font-size: 1.8em;
  background-color: #2c3e50;
  padding: 15px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.exonomy-design h2:hover {
  background-color: #34495e;
}

.exonomy-design h3 {
  color: #bdc3c7;
  font-size: 1.4em;
  margin-top: 25px;
  margin-bottom: 15px;
}

.exonomy-design .section-content {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);
}

.exonomy-design p {
  margin-bottom: 15px;
}

.exonomy-design ul {
  padding-left: 25px;
}

.exonomy-design li {
  margin-bottom: 10px;
}

.exonomy-design a {
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.exonomy-design a:hover {
  color: #4fa8d5;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .exonomy-design {
    padding: 20px;
  }

  .exonomy-design h1 {
    font-size: 2em;
  }

  .exonomy-design h2 {
    font-size: 1.5em;
  }
}

.section-content ul {
  list-style-type: none;
  padding: 0;
}

.section-content li {
  margin-bottom: 10px;
}
</style>
