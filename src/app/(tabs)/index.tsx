// import { StyleSheet, ScrollView } from 'react-native';
// import { Text } from '@/src/components/Themed';
// import B from '@/src/components/B';
// import Spacer from '@/src/components/Spacer';

import { StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';


const source = {
  html: `
<h1 style='fontSize:36px; text-align:center; margin: 3% 10% 0% 10%'>
  NPOSE: Non-Profit and Open Source Everything
</h1>
<h2 style='fontSize:28px; text-align:center;'>White Paper</h2>
  <p style='fontSize:20px; padding:0 10%; margin: 1%; text-align:justify'>
    &emsp;&ensp;  Non-Profit and Open Source Everything (NPOSE) is an organization that will develop a suite of non-profit and open source internet applications to compete with companies
    commonly known as "big tech". Applications developed by NPOSE will be more equitable, free, and privacy protecting than competitors. A non-profit, such as NPOSE, is uniquely
    positioned to win significant market share because net positive revenue that competitors take as profits can be spent on providing more value to users and creators.
  </p>
  <p style='fontSize:20px; padding:0 10%; margin: 1%; text-align:justify'>
    &emsp;&ensp;  NPOSE’s first product will be a video-on-demand (VOD) streaming application called VidReam. Creators on VidReam will be given a larger percentage of revenue than competitors and will
    be better protected from improper copyright infringement claims for fair use. User's will have control over how their data is collected and used. A shared governance system will allow
    users and creators to democratically govern the application. A percentage of net positive revenues will be spent on projects seeking to provide a societal good. Specifics of how this money
    will be spent will be decided through the shared governance system.
  </p>
  <p style='fontSize:20px; padding:0 10%; margin: 1%; text-align:justify'>
    &emsp;&ensp;  VidReam will be NPOSE's first application because the “creator economy” of VOD streaming has been identified as a market that is ripe for competition. Content creators do not have
    exclusivity agreements and have loyal fan bases that will follow them to new platforms. Based on the success and popularity of VidReam, NPOSE will later expand into social media, search, and e-commerce
    applications.
  </p>
  <p style='fontSize:20px; padding:0 10%; margin: 1%; text-align:justify'>
    &emsp;&ensp;  NPOSE's product is not only its user-facing applications, but also the unique way in which it will be funded and operated. To raise funds, NPOSE will use a crowd funded, capped-profit subsidiary fundraising model.
    This will allow NPOSE to attract the large investments necessary to create applications at scale without losing the non-profit mission of the organization. After an initial growth period, NPOSE will
    stop taking capped-profit investments and will close the subsidiary upon paying out all dividends. NPOSE will use a unique labor structure in which open source contributors will be given hourly
    compensation for their code and promised future compensation to be disbursed when net positive revenue is generated. This investment and labor compensation structure is meant to create a platform that
    can align the short term profit motives of individuals with a longer term vision for good.
  </p>
  <b style='fontSize:24px; text-align:center; padding:1% 0 0 0;'>Why NPOSE and why now? </b>
  <p style='fontSize:20px; padding:0 10%; margin: 1%; text-align:justify'>
      NPOSE hopes to compete with the currently dominant web applications and win marketshare by cultivating a distinctive user, creator, and worker centric
      organization. There are many reasons why now is the perfect time for an organization like NPOSE to prosper. Many of the top web applications in the world are at
      inflection points where they must increase profits to please shareholders and have alienated their users.
  </p>
  
`
};

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <ScrollView>
      <RenderHtml
        contentWidth={width}
        source={source}
      />
    </ScrollView>
  );
}

// export default function Index() {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//       <Text style={styles.h1}>NPOSE: Non-Profit and Open Source Everything</Text>
//       <Text style={styles.h2}>White Paper</Text>
//       <Text style={styles.normal}>
//         <B>arst</B>Non-Profit and Open Source Everything (NPOSE) is an organization that will develop a suite of non-profit and open source internet applications to compete with companies
//         commonly known as "big tech". Applications developed by NPOSE will be more equitable, free, and privacy protecting than competitors. A non-profit, such as NPOSE, is uniquely
//         positioned to win significant market share in this segment because net positive revenue that competitors take as profits can be spent on providing more value to users and creators.<Spacer height={20} />
//       </Text>
//       <Spacer height={5} />
//       <Text style={styles.normal}>
//         NPOSE’s first product will be a video-on-demand (VOD) streaming application called VidReam. Creators on VidReam will be given a larger percentage of revenue than competitors and will
//         be better protected from improper copyright infringement claims for fair use. User's will have control over how their data is collected and used. A shared governance system will allow
//         users and creators to democratically govern the application. A percentage of net positive revenues will be spent on projects seeking to provide a societal good. Specifics of how this money
//         will be spent will be decided on through the shared governance system.

//         VidReam will be NPOSE's first application because the “creator economy” of VOD streaming has been identified as the market that is most open to competition. Content creators do not have exclusivity
//         agreements and have loyal fan bases that will follow them to new platforms. Based on the success and popularity of VidReam, NPOSE will later expand into social media, search, e-commerce, and a social
//         impact investment ant donation platform.

//         NPOSE's product is not only its user-facing applications, but also the unique way it will be funded and operated. To raise funds, NPOSE will use a capped profit subsidiary fundraising model. This will
//         allow NPOSE to attract the large investments necessary to create applications at scale without losing the core non-profit mission of the organization. After an initial growth period, NPOSE will stop
//         taking capped-profit investments and will close the subsidiary upon paying out all dividends. NPOSE will also use a unique labor structure in which open source contributors will be given hourly
//         compensation for their code and promised future compensation to be disbursed when net positive revenue is generated. This investment and labor compensation structure is meant to create a platform that
//         can align the short term profit motives of individuals with a longer term vision for good.

//         NPOSE services will not make any profit but that doesn't mean NPOSE services will not generate excess revenue. The advantages of NPOSE services over legacy internet services
//         is not simply in ethics or policies, n fact NPOSE services will be able to return a larger percentage of revenue to creators and advertisers than competitors specifically
//         because NPOSE does not need to take profits.
//       </Text>
//       <Spacer height={20} />
//       <Text style={styles.normal}>
//         <Text style={styles.bold}>Capped Profit: </Text>
//         In order to allow for more rapid expansion of NPOSE organisations, temporary capped profit funding rounds will be allowed. This will allow NPOSE to attract the large investments
//         necessary to create applications at a massive scale, without losing the core non-profit mission of the organization. The capped profit organizational model is the ideal way to
//         align the incentives of organiztions, investors, and society as a whole. After an initial growth period, NPOSE will stop taking capped-profit investments and close the subsidiary
//         upon paying out dividends
//       </Text>
//       <Spacer height={20} />
//       <Text style={styles.normal}>
//         <Text style={styles.bold}>Revenue Model: </Text>
//         NPOSE is open to all organizations that follow our core ideals and rules. Our founding team does have some beliefs and goals that should be made clear. NPOSE
//         organizations are not prevented from making positive revenue (similiar to profits in a for-profit business) and are in fact encouraged to find ethical revenue
//         streams to expand their global reach. NPOSE rules provide a framework to expand global social good with excess positive revenue.
//       </Text>
//       <Spacer height={20} />
//       <Text style={styles.normal}>
//         <Text style={styles.bold}>Wages: </Text>
//         NPOSE follows a unique open source compensation system to pay contributors when they contribute code and legally promise future compensation to be disbursed if/when excess revenue is
//         generated.  This compensation is not guaranteed unless excess revenue is achieved and will be distributed on a rolling basis when NPOSE begins to make excess revenue.
//       </Text>
//       <Spacer height={20} />
//       <Text style={styles.normal}>
//         <Text style={styles.bold}>NPOSE Market: </Text>
//         NPOSE market will be an accessible donation and investment platform that will allow users to give to non-profits and NPOSE capped profits.
//         In addition, users will be able to invest in for-profit business listed in the NPOSE social impact repository. NPOSE market enables users to realign
//         global economic incentives towards a collective societal good by creating positive and negative economic pressure through investment.
//       </Text>
//       <Spacer height={20} />
//       <Text style={styles.bold}>Why NPOSE and why now? </Text>
//       <Spacer height={20} />
//       <Text style={styles.normal}>
//         NPOSE hopes to compete with the currently dominant internet services and win marketshare by cultivating a distinctive user, creator, and worker centric
//         organization. There are many reasons why now is the perfect time for an organization like NPOSE to prosper. Many of the top internet services in the world are at
//         inflection points where they must increase profits to please shareholders and have alienated their users and creators. These companies must
//         contiunally increase profits to satisfy investors and have degraded the user and creator experience as a result.
//       </Text>
//       <Spacer height={50} />
//       <Text>Note: The phrase excess revenue is used in this document to describe the money a non-profit has left over after paying all operating expenses, otherwise known as operating margin.</Text>
//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    margin: 10,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20
    ,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  normal: {
    fontSize: 18,
  },
});
