import { StyleSheet, ScrollView } from 'react-native';
import { Text } from '@/src/components/Themed';

import Spacer from '@/src/components/Spacer';

export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.h1}>NPOSE: Non-Profit and Open Source Everything</Text>
      <Text style={styles.h2}>White Paper</Text>
      <Text style={styles.normal}>
        Non-Profit Open Source Everything is an organization focused on providing users with better internet applications by rejecting the profit
        first, walled garden approach among the dominant monopolistic internet services. The goals of NPOSE are simple: create internet services for creators and users
        that are non-profit (as well as capped profit) and open source. A non-profit approach allows NPOSE services to avoid the share holder profit interests that
        cause other major internet services to make decisions that are bad for their users and creators. The open-source nature of NPOSE projects allows them to be
        massive collaborative efforts by developers, users, and creators. NPOSE will use a direct democracy voting system to make major organization level decisions
        and elect representative board members.The advantages of NPOSE services over legacy internet services is not simply in ethics or policies. _______  NPOSE
        services will never make any profit but that doesn't mean NPOSE services will not generate excess revenue.  In fact NPOSE services will be able to return a
        larger percentage of revenue to creators and advertisers than their legacy counterparts specifically because NPOSE does not need to take profits.
      </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        <Text style={styles.bold}>Capped Profit: </Text>
        In order to allow for more rapid expansion of NPOSE organisations, temporary capped profit funding rounds will be allowed. The capped profit organizational
        model is the ideal way to align the incentives of organiztions, donators (is “investors” ok or bad for legal?), and society as a whole.
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
        NPOSE follows a unique open source compensation system to legally promise future compensation (if/when a gross margin is achieved) for any open source
        contributors at a minimum of $25 / hour (adjusted to developer's local economy and inflation). This compensation is not guaranteed unless a gross margin is achieved and is nod provided immediately but rather will be
        distributed on a rolling and percentage (explain more) basis as soon as NPOSE begins to make a gross margin.
      </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        <Text style={styles.bold}>NPOSE Market: </Text>
        NPOSE market will be an accessible donation and investment platform that will allow users to give to non-profits and NPOSE capped profits.
        In addition, users will be able to invest in for-profit business listed in our social impact repository ( change me). NPOSE market enable users to realign
        global economic incentives towards a collective societal good by creating economic pressure on organizations and business.
      </Text>
      <Spacer height={20} />
      <Text style={styles.bold}>Why NPOSE and why now? </Text>
      <Spacer height={20} />
      <Text style={styles.normal}>
        NPOSE hopes to compete with the currently dominant internet services and win marketshare by cultivating a distinctive user, creator, and worker centric
        organization. There are many reasons why now is the perfect time for an organization like NPOSE to prosper. Many of top internet services in the world are at
        inflection points that have alienated their users, creators, and employees as they rake in record profits from selling personal data. These companies must
        contiunally increase profits to satisfy investors and have degraded the user and creator experience as a result.
      </Text>
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
