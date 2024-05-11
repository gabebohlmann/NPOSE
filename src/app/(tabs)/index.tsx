import { StyleSheet, ScrollView } from 'react-native';
import { Text } from '@/src/components/Themed';

import Spacer from '@/src/components/Spacer';

export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.h1}>NPOSE: Non-Profit and Open Source Everything</Text>
      <Text style={styles.h2}>White Paper</Text>
      <Text style={styles.normal}>
        NPOSE (Non-Profit and Open Source Everything) is an organization that will develop a suite of non-profit ant open source internet applications to compete with companies
        commonly referred to as "big tech". Applications developed by NPOSE will be more fair, equitable, and privacy protecting than competitors. A non-profit, such as NPOSE,
        is uniquely positioned to win significant market share in this segment because competitors "waste" money by taking profits whereas NPOSE uses excess revenues to provide
        more value to users, creators, and society. The open-source nature of NPOSE projects allows them to be collaborative efforts among developers, users, and creators in which
        all can benefit.

        NPOSE will use a direct democracy voting system to make major organization level decisions.

        NPOSE services will not make any profit but that doesn't mean NPOSE services will not generate excess revenue. The advantages of NPOSE services over legacy internet services
        is not simply in ethics or policies.  In fact NPOSE services will be able to return a larger percentage of revenue to creators and advertisers than competitors specifically
        because NPOSE does not need to take profits.
      </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        <Text style={styles.bold}>Capped Profit: </Text>
        In order to allow for more rapid expansion of NPOSE organisations, temporary capped profit funding rounds will be allowed. This will allow NPOSE to attract the large investments
        necessary to create applications at a massive scale, without losing the core non-profit mission of the organization. The capped profit organizational model is the ideal way to
        align the incentives of organiztions, investors, and society as a whole. After an initial growth period, NPOSE will stop taking capped-profit investments and close the subsidiary
        upon paying out dividends
      </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        <Text style={styles.bold}>Revenue Model: </Text>
        NPOSE is open to all organizations that follow our core ideals and rules. Our founding team does have some beliefs and goals that should be made clear. NPOSE
        organizations are not prevented from making positive revenue (similiar to profits in a for-profit business) and are in fact encouraged to find ethical revenue
        streams to expand their global reach. NPOSE rules provide a framework to expand global social good with excess positive revenue.
      </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        <Text style={styles.bold}>Wages: </Text>
        NPOSE follows a unique open source compensation system to pay contributors when they contribute code and legally promise future compensation to be disbursed if/when excess revenue is
        generated.  This compensation is not guaranteed unless excess revenue is achieved and will be distributed on a rolling basis when NPOSE begins to make excess revenue.
      </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        <Text style={styles.bold}>NPOSE Market: </Text>
        NPOSE market will be an accessible donation and investment platform that will allow users to give to non-profits and NPOSE capped profits.
        In addition, users will be able to invest in for-profit business listed in the NPOSE social impact repository. NPOSE market enables users to realign
        global economic incentives towards a collective societal good by creating positive and negative economic pressure through investment.
      </Text>
      <Spacer height={20} />
      <Text style={styles.bold}>Why NPOSE and why now? </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        NPOSE hopes to compete with the currently dominant internet services and win marketshare by cultivating a distinctive user, creator, and worker centric
        organization. There are many reasons why now is the perfect time for an organization like NPOSE to prosper. Many of the top internet services in the world are at
        inflection points where they must increase profits to please shareholders and have alienated their users and creators. These companies must
        contiunally increase profits to satisfy investors and have degraded the user and creator experience as a result.
      </Text>
      <Spacer height={20} />
      <Text>Note: The phrase excess revenue is used in this document to describe the money a non-profit has left over after paying all operating expenses, otherwise known as operating margin.</Text>
    </ScrollView>
  );
}

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
    fontSize: 32,
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
