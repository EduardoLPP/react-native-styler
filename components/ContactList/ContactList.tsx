import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Monkey D. Luffy',
            status: 'The King of Pirates',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7eaf583b-db7a-4d9a-952d-f6f3788fe15d/da0zqyl-7ed253b6-0305-4bcc-88d9-04c7de5f0033.png/v1/fill/w_892,h_896/straw_hat_pirates_jolly_roger_by_verbalemissions_da0zqyl-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6IlwvZlwvN2VhZjU4M2ItZGI3YS00ZDlhLTk1MmQtZjZmMzc4OGZlMTVkXC9kYTB6cXlsLTdlZDI1M2I2LTAzMDUtNGJjYy04OGQ5LTA0YzdkZTVmMDAzMy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FtNPhSPeV8eVihRR3LI7HbDYwE88TL2k9Xx7Rh_BSbY'
        },
        { 
            uid: 2,
            name: 'Vinsmoke Sanji',
            status: 'A Chef',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7eaf583b-db7a-4d9a-952d-f6f3788fe15d/da13iqf-02046214-3ce5-41ad-84af-4c9d086bb49d.png/v1/fill/w_892,h_896/sanji_by_verbalemissions_da13iqf-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6IlwvZlwvN2VhZjU4M2ItZGI3YS00ZDlhLTk1MmQtZjZmMzc4OGZlMTVkXC9kYTEzaXFmLTAyMDQ2MjE0LTNjZTUtNDFhZC04NGFmLTRjOWQwODZiYjQ5ZC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uupzsTZhy6KV7lKS-crEeYmD10l8u2Bs6JqWHO6O56A'
        },
        { 
            uid: 3,
            name: 'Frank',
            status: 'Suuupeerrr',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7eaf583b-db7a-4d9a-952d-f6f3788fe15d/da15dcw-5eec9b24-67a0-492c-a43d-8634480b3ee9.png/v1/fill/w_892,h_896/franky_by_verbalemissions_da15dcw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6IlwvZlwvN2VhZjU4M2ItZGI3YS00ZDlhLTk1MmQtZjZmMzc4OGZlMTVkXC9kYTE1ZGN3LTVlZWM5YjI0LTY3YTAtNDkyYy1hNDNkLTg2MzQ0ODBiM2VlOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mnrM539RiL93ZtKhKfn_HXgYMFTs9v1QxXnsAvnFJ1A'
        },
        {
            uid: 4,
            name: 'Monkey D. Luffy',
            status: 'The King of Pirates',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7eaf583b-db7a-4d9a-952d-f6f3788fe15d/da0zqyl-7ed253b6-0305-4bcc-88d9-04c7de5f0033.png/v1/fill/w_892,h_896/straw_hat_pirates_jolly_roger_by_verbalemissions_da0zqyl-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6IlwvZlwvN2VhZjU4M2ItZGI3YS00ZDlhLTk1MmQtZjZmMzc4OGZlMTVkXC9kYTB6cXlsLTdlZDI1M2I2LTAzMDUtNGJjYy04OGQ5LTA0YzdkZTVmMDAzMy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FtNPhSPeV8eVihRR3LI7HbDYwE88TL2k9Xx7Rh_BSbY'
        },
        { 
            uid: 5,
            name: 'Vinsmoke Sanji',
            status: 'A Chef',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7eaf583b-db7a-4d9a-952d-f6f3788fe15d/da13iqf-02046214-3ce5-41ad-84af-4c9d086bb49d.png/v1/fill/w_892,h_896/sanji_by_verbalemissions_da13iqf-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6IlwvZlwvN2VhZjU4M2ItZGI3YS00ZDlhLTk1MmQtZjZmMzc4OGZlMTVkXC9kYTEzaXFmLTAyMDQ2MjE0LTNjZTUtNDFhZC04NGFmLTRjOWQwODZiYjQ5ZC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uupzsTZhy6KV7lKS-crEeYmD10l8u2Bs6JqWHO6O56A'
        },
        { 
            uid: 6,
            name: 'Frank',
            status: 'Suuupeerrr',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7eaf583b-db7a-4d9a-952d-f6f3788fe15d/da15dcw-5eec9b24-67a0-492c-a43d-8634480b3ee9.png/v1/fill/w_892,h_896/franky_by_verbalemissions_da15dcw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA0IiwicGF0aCI6IlwvZlwvN2VhZjU4M2ItZGI3YS00ZDlhLTk1MmQtZjZmMzc4OGZlMTVkXC9kYTE1ZGN3LTVlZWM5YjI0LTY3YTAtNDkyYy1hNDNkLTg2MzQ0ODBiM2VlOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mnrM539RiL93ZtKhKfn_HXgYMFTs9v1QxXnsAvnFJ1A'
        }
    ]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView horizontal>

            {contacts.map(({uid, name, status, imageUrl}) => (
                <View  style={styles.container}>
                     <View key={uid} style={styles.userCard}>
                        <Image source={{ uri: imageUrl }} style={styles.userImage}/>
                    </View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            )) }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 12,
        marginBottom: 15,
        color: '#fff',
    },
    container: {
        flex: 1,
        marginLeft: 8,
    },
    userCard: {
        marginLeft: 40,
        backgroundColor: '#ae22ff',
        borderRadius: 50,
        height: 80, 
        width: 80,
    },
    userImage: {
        marginTop: -30,
        marginLeft: -25,
        width: 130,
        height: 130
    },
    userName: {
        fontSize: 14,
        marginTop: 10,
        marginLeft: 8,
        marginRight: 10,
        color: '#fff',
    },
    userStatus: {
        fontSize: 12,
        marginLeft: 15,
        marginBottom: 12,
        color: '#fff',
    }
})