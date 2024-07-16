<!-- 
<template>
  <div>
      <Navbar />

    <div class="exonomy-design">
      <h1>Exonomy and Exocracy Overview</h1>
  
      <section>
        <h2>1. Tooling</h2>
        <p>
          MVP: The P2P solution for 100% decentralization, supporting persistence of peer-to-peer streaming data, resulting in an eventually consistent shared state between all peers. Peers don’t rely on the availability of original data authors due to decentralized topology.
        </p>
        <p>
          Tools:
          <ul>
            <li>1.1 SocketSupply runtime</li>
            <li>1.2 Nuxt Framework</li>
            <li>1.3 SQLite3 - educational resources:
              <ul>
                <li>1.3.1 <a href="https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m">Drizzle ORM, SQLite and Nuxt JS - Getting Started</a></li>
                <li>1.3.2 <a href="https://github.com/WiseLibs/better-sqlite3">GitHub - WiseLibs/better-sqlite3: The fastest and simplest library for SQLite3 in Node.js.</a></li>
              </ul>
            </li>
            <li>1.4 Vuetify UI theming</li>
          </ul>
        </p>
      </section>
  
      <section>
        <h2>2. Model</h2>
        <p>
          Detailed database structure including Voucher, Campaigns, Trusts, Projects, CrowdFunders, CrowdSourcing, Exonomists.
        </p>
        <p>
          <strong>Voucher:</strong>
          <ul>
            <li>2.1 VoucherID (ContentID from IPFS Create event)</li>
            <li>2.2 Voucher (Descriptive name)</li>
            <li>2.3 Notes (Long form explanation)</li>
            <li>2.4 Author (Creator and first Owner) (Foreign Key from Exonomists)</li>
            <li>2.5 Owner (Current Owner in possession) (Foreign Key from Exonomists)</li>
            <li>2.6 Status (Created, Sold, Redeemed)</li>
            <li>2.7 FaceValue (Declared value of the voucher’s product or service)</li>
            <li>2.8 SaleValue (Final value of the voucher’s sale to a new owner)</li>
            <li>2.9 Auction (Boolean of Auctioned status)</li>
          </ul>
        </p>
        <p>
          <strong>Campaigns:</strong>
          <ul>
            <li>2.10 CampaignID (possibly the same SubclusterID as a voucher or simply an IPFS DocumentID)</li>
            <li>2.11 Campaign Title</li>
            <li>2.12 Campaign Long Description</li>
            <li>2.13 StartDate</li>
            <li>2.14 EndDate</li>
            <li>2.15 AuthorID</li>
          </ul>
        </p>
        <p>
          <strong>2.16 Delegates, Trusts, Projects, CrowdFunders, CrowdSourcing, Exonomists:</strong>
          (Details as per your project's specific requirements)
        </p>
      </section>
  
      <section>
        <h2>3. Exonomy App Feature Tree</h2>
        <p>
          Features to be included in v1.0:
          <ul>
            <li>3.1 Exonomy (NFT) Wallet</li>
            <li>3.2 CRUD operations</li>
            <li>3.3 Barter and sell for cash/crypto</li>
            <li>3.4 Voucher Market / Auction</li>
            <li>3.5 Cost Sharing</li>
            <li>3.6 Crowdfunding Campaigns</li>
            <li>3.7 Exocracy Lite features (decentralized project management)</li>
            <li>3.8 CRUD operations for CrowdFunding and CrowdSourcing</li>
          </ul>
        </p>
      </section>
  
      <section>
        <h2>4. Exocracy.com Feature Tree</h2>
        <p>
          Hosted project management web app running on PostgreSQL with SQL REST API. Integration with Exonomy mobile app using SQLite3 for local synchronization. Offers free and paid tiers based on project size.
        </p>
        <p>
          Pricing tiers:
          <ul>
            <li>4.1 Free tier: 1 project with up to 100 tasks</li>
            <li>4.2 Paid tiers:
              <ul>
                <li>4.2.1 Up to 10K tasks: $5 per month</li>
                <li>4.2.2 Up to 100K tasks: $25 per month</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          Visitors to Exocracy.com can download the Exonomy app for full Exonomy functionality.
        </p>
      </section>
  
    </div>
  </div>
  </template>
  
  <script>
  import Navbar from '@/components/navbar.vue'; 
  export default {
    // Optionally, you can define meta tags, head, etc.
    head() {
      return {
        title: 'Exonomy and Exocracy Overview - ExoSystems',
        meta: [
          { hid: 'description', name: 'description', content: 'Overview of Exonomy and Exocracy projects at ExoSystems, detailing tooling, models, and features.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
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
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(255,255,255,0.1);
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
    </style>
   -->


   <template>
    <Navbar />
    <div class="exonomy-design">
      <h1>Exosystems: Join the Future of Sovereign Peer-to-Peer Commerce and Social Media Autonomy</h1>
      <p>Exosystems invites you to join the team of developers who are building the future of sovereign peer-to-peer commerce and social media autonomy. A world awaits us without centralized control over our commercial interactions and social relationships.</p>
  
      <h2>1. Tooling</h2>
      <div class="section-content">
        <ul>
          <li>
            <h3>1.1. MVP</h3>
            <ul>
              <li>1.1.1. SocketSupply runtime</li>
              <li>1.1.2. Nuxt Framework</li>
              <li>1.1.3. SQLite3</li>
              <ul>
                <li>1.1.3.1. Drizzle ORM, SQLite and Nuxt JS- Getting Started- DEV Community</li>
                <li>1.1.3.2. GitHub- WiseLibs/better-sqlite3: The fastest and simplest library for SQLite3 in Node.js.</li>
              </ul>
              <li>1.1.4. Vuetify UI theming</li>
            </ul>
          </li>
          <li>
            <h3>1.2. Community Node</h3>
            <ul>
              <li>1.2.1. OrbisDB on Ceramic (IPFS/PostgreSQL)</li>
            </ul>
          </li>
          <li>
            <h3>1.3. GoViral decentralized app distribution component</h3>
            <ul>
              <li>1.3.1. iOS</li>
              <ul>
                <li>1.3.1.1. AirDrop</li>
                <li>1.3.1.2. Third-Party Apps</li>
              </ul>
              <li>1.3.2. Android</li>
              <ul>
                <li>1.3.2.1. Nearby Share</li>
                <li>1.3.2.2. Wi-Fi Direct</li>
              </ul>
              <li>1.3.3. Linux</li>
              <ul>
                <li>1.3.3.1. Bluetooth File Transfer</li>
                <li>1.3.3.2. Wi-Fi Direct</li>
              </ul>
              <li>1.3.4. Windows</li>
              <ul>
                <li>1.3.4.1. Bluetooth File Transfer</li>
                <li>1.3.4.2. Nearby Sharing</li>
              </ul>
              <li>1.3.5. Mac</li>
              <ul>
                <li>1.3.5.1. Bluetooth File Transfer</li>
                <li>1.3.5.2. Nearby Sharing</li>
              </ul>
              <li>1.3.6. Cross-Platform Solutions</li>
              <ul>
                <li>1.3.6.1. SHAREit or Xender</li>
                <li>1.3.6.2. FTP Server Over Hotspot</li>
                <li>1.3.6.3. QRCodeSharing</li>
              </ul>
            </ul>
          </li>
          <li>
            <h3>1.4. Economic Options</h3>
            <ul>
              <li>1.4.1. MetaMask (Etherium)</li>
              <li>1.4.2. Bitcoin Cash (Bitcoin)</li>
              <li>1.4.3. ZCash (Decentralized money)</li>
              <li>1.4.4. Stripe (Cash/Credit)</li>
              <li>1.4.5. WalletConnect</li>
              <ul>
                <li>1.4.5.1. Coinbase (SDK)</li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
  
      <h2>2. Models</h2>
      <div class="section-content">
        <ul>
          <li>
            <h3>2.1. Voucher</h3>
            <ul>
              <li>2.1.1. VoucherID</li>
              <li>2.1.2. Voucher (Descriptivename)</li>
              <li>2.1.3. Notes (Longformexplanation)</li>
              <li>2.1.4. Author (CreatorandfirstOwner)</li>
            <li>2.1.5. Owner (CurrentOwnerinpossession)</li>
            <li>2.1.6. Status (Created,Sold,Redeemed)</li>
            <li>2.1.7. FaceValue (Declaredvalueof thevoucher’sproductorservice)</li>
            <li>2.1.8. SaleValue (Finalvalueof thevoucher’ssaletoanewowner)</li>
            <li>2.1.9. Auction (BooleanofAuctionedstatus)</li>
          </ul>
        </li>
        <li>
          <h3>2.2. Campaigns</h3>
          <ul>
            <li>2.2.1. CampaignID</li>
            <li>2.2.2. CampaignTitle</li>
            <li>2.2.3. CampaignLongDescription</li>
            <li>2.2.4. StartDate</li>
            <li>2.2.5. EndDate</li>
            <li>2.2.6. AuthorID</li>
            <li>2.2.7. Delegates</li>
          </ul>
        </li>
        <li>
          <h3>2.3. Exonomists</h3>
          <ul>
            <li>2.3.1. ExonomistID</li>
            <li>2.3.2. Username</li>
            <li>2.3.3. Email</li>
            <li>2.3.4. Created</li>
            <li>2.3.5. Updated</li>
          </ul>
        </li>
        <li>
          <h3>2.4. Trusts</h3>
          <ul>
            <li>2.4.1. TrustID</li>
            <li>2.4.2. VoucherID</li>
            <li>2.4.3. BuyerID</li>
            <li>2.4.4. SellerID</li>
            <li>2.4.5. CampaignID</li>
            <li>2.4.6. ProjectID</li>
            <li>2.4.7. TrustTypeID</li>
            <li>2.4.8. TrustValue</li>
            <li>2.4.9. TrustDate</li>
          </ul>
        </li>
        <li>
          <h3>2.5. Projects</h3>
          <ul>
            <li>2.5.1. ProjectID</li>
            <li>2.5.2. CreatorID</li>
            <li>2.5.3. ProjectManagerID</li>
            <li>2.5.4. Title</li>
            <li>2.5.5. Description</li>
            <li>2.5.6. Goal</li>
            <li>2.5.7. Value</li>
            <li>2.5.8. Status</li>
            <li>2.5.9. Created</li>
            <li>2.5.10. Updated</li>
          </ul>
        </li>
        <li>
          <h3>2.6. CrowdFunders</h3>
          <ul>
            <li>2.6.1. FunderID</li>
            <li>2.6.2. CampaignID</li>
            <li>2.6.3. Funds</li>
            <li>2.6.4. Created</li>
          </ul>
        </li>
        <li>
          <h3>2.7. CrowdSourcing</h3>
          <ul>
            <li>2.7.1. ProviderID</li>
            <li>2.7.2. ProjectTaskID</li>
            <li>2.7.3. Created</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>3. Exonomy app Feature Tree</h2>
    <div class="section-content">
      <ul>
        <li>
          <h3>3.1. Exonomy (NFT) Wallet</h3>
          <ul>
            <li>3.1.1. CRUD</li>
            <li>3.1.2. Barter</li>
            <li>3.1.3. Sell for cash/crypto</li>
          </ul>
        </li>
        <li>
          <h3>3.2. Voucher Market / Auction</h3>
          <ul>
            <li>3.2.1. CRUD</li>
            <li>3.2.2. Cost Sharing</li>
          </ul>
        </li>
        <li>
          <h3>3.3. Crowdfunding Campaigns</h3>
          <ul>
            <li>3.3.1. CRUD</li>
            <li>3.3.2. CrowdFunding</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>4. Exocracy.com Feature Tree</h2>
    <div class="section-content">
      <ul>
        <li>
          <h3>4.1. Exocracy Lite</h3>
          <ul>
            <li>4.1.1. CRUD</li>
            <li>4.1.2. CrowdFunding</li>
            <li>4.1.3. CrowdSourcing</li>
          </ul>
        </li>
        <li>
          <h3>4.2. Exocracy</h3>
          <ul>
            <li>4.2.1. Up to 10K tasks, $5 per month</li>
            <li>4.2.2. Up to 100K tasks, $25 per month</li>
          </ul>
        </li>
        <li>
          <h3>4.3. Project fees</h3>
          <ul>
            <li>4.3.1. $5 to have 3 projects</li>
            <li>4.3.2. $25 to have 25 projects</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/navbar.vue'; 
  export default {
    // Optionally, you can define meta tags, head, etc.
    head() {
      return {
        title: 'Exonomy and Exocracy Overview - ExoSystems',
        meta: [
          { hid: 'description', name: 'description', content: 'Overview of Exonomy and Exocracy projects at ExoSystems, detailing tooling, models, and features.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
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
  box-shadow: 0 2px 5px rgba(255,255,255,0.5);
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
    </style>