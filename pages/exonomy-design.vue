
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.exonomy-design h1 {
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.exonomy-design h2 {
  color: #444;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.exonomy-design h3 {
  color: #555;
  margin-top: 15px;
  margin-bottom: 10px;
}

.exonomy-design .section-content {
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.exonomy-design p {
  margin-bottom: 10px;
}

.exonomy-design ul {
  padding-left: 20px;
}

.exonomy-design li {
  margin-bottom: 5px;
}

    </style>
  