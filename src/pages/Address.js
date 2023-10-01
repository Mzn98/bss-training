import { DataTable, Layout, LegacyCard, Page } from "@shopify/polaris";
export default function AddressPage() {
    const addresses = localStorage.getItem("addresses") ? JSON.parse(localStorage.getItem("addresses")) : [];
    return (
        <Page title="My Addresses">
            <Layout>
                <Layout.AnnotatedSection
                    title="Addresses details"
                    description="You can click on Account menu to edit addresses"
                >
                    <LegacyCard sectioned>
                        <DataTable
                            columnContentTypes={[
                                'text',
                                'text'
                            ]}
                            headings={[
                                'Address',
                                'City'
                            ]}
                            rows={addresses.map(address => {
                                return [address.address, address.city]
                            })}
                        />
                    </LegacyCard>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    )
}