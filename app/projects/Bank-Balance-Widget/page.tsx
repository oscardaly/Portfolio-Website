import { ArticleLayout } from "@/components/article";

const BankBalanceWidget = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2026"
      title="Bank Balance Widget"
      lead="A native iOS home-screen widget that shows your true spendable balance — your selected account balances minus this month's unbilled card spend, at a glance. Built with SwiftUI and WidgetKit, with an App-Group cache so the widget renders offline and your bank token never leaves the app."
      meta={[
        { label: "Year", value: "2026" },
        { label: "Role", value: "Design & Build" },
      ]}
      links={[
        {
          label: "Source",
          href: "https://github.com/oscardaly/Bank-Balance-Widget",
        },
      ]}
    >
      <h2>Background</h2>
      <p>
        Your current account can look healthy while a chunk of unbilled
        credit-card spend is quietly invisible &mdash; money that is already
        gone, just not yet billed. This widget surfaces the number that actually
        matters: what is safe to spend once the card bill lands. It nets your
        selected Starling account balances against this month&rsquo;s card spend
        and puts a single, honest figure on your home screen, in Small, Medium
        and Large sizes.
      </p>

      <h2>The app computes, the widget only renders</h2>
      <p>
        The architecture follows the correct WidgetKit pattern: the widget never
        touches the network. The app holds your Starling personal access token
        in the Keychain, fetches your balances, adds your current-month card
        spend, computes the snapshot, and writes it to a shared App-Group
        container &mdash; then asks WidgetKit to reload. The widget&rsquo;s
        timeline provider reads only that cached snapshot, so it renders
        instantly and offline, costs no battery, and the token never leaves the
        app. Clean separation: the app owns the network and the secrets, the
        widget owns the pixels.
      </p>

      <h2>Pick what counts</h2>
      <p>
        Not every account should count toward &ldquo;spendable&rdquo;. The app
        fetches all your accounts and lets you toggle which ones feed the total;
        flipping a toggle &mdash; or editing the card-spend figure &mdash;
        recomputes the snapshot instantly from cached data, with no round-trip
        to the bank. The selection and the netting math live in a pure,
        dependency-free Swift core &mdash; a spendable-balance calculator and a
        transactions-to-this-month calculator &mdash; that is unit-tested in
        isolation, so the number is provably correct before any UI is involved.
      </p>

      <h2>Automating card spend with Open Banking</h2>
      <p>
        Entering card spend by hand works, but the goal was to make it
        automatic. Using GoCardless Bank Account Data, on the free AIS tier, the
        app can connect to your card issuer, complete the bank-auth flow, and
        pull this month&rsquo;s transactions to compute the spend for you
        &mdash; with manual entry kept as the fallback where issuer coverage is
        patchy. The connection coordinator and the transactions-to-spend
        calculator are implemented and unit-tested behind a swappable card
        source, so &ldquo;Manual&rdquo; and &ldquo;Automatic (Open
        Banking)&rdquo; are the same computation fed from two inputs.
      </p>

      <h2>Security judgement</h2>
      <p>
        Secrets are treated as secrets: the Starling token and any Open-Banking
        credentials are stored in the Keychain, never in the widget, and never
        on the network path the widget can see. Just as important is knowing
        where this personal build stops short of a shipping product &mdash; in a
        real app the GoCardless keys belong on a backend that proxies the calls,
        never baked into the app binary, which is exactly why the repo carries a
        proxy-backend scaffold rather than pretending the client-side approach
        is production-ready.
      </p>
    </ArticleLayout>
  );
};

export default BankBalanceWidget;
