'use client';

import {
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Page,
  PageFooter,
  Paragraph,
  RadioButton,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();
  console.log(watch());
  return (
    <Document>
      <Page>
        <Heading1>
          Meldpunt om een roze eenhoornparkeerzone op straat te creëren voor inwoners met vliegende huisdieren
        </Heading1>
        <Paragraph>
          Welkom bij het Absurde Meldpunt van de Gemeente Utrecht Heeft u onlangs gemerkt dat er een schrijnend tekort
          is aan parkeerzones voor roze eenhoorns? Zijn uw vliegende huisdieren in de war over waar ze moeten landen?
          Dan bent u op de juiste plek! Melding: Ontbreken van een Roze Eenhoornparkeerzone
        </Paragraph>
        <br />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <FormField invalid={!!errors.location}>
            <Paragraph>
              <FormLabel htmlFor="location">Locatie:</FormLabel>
            </Paragraph>
            <Textbox
              id="location"
              {...register('location', {
                required: 'Dit is verplicht',
                minLength: { value: 4, message: 'Min length is 4' },
              })}
              placeholder="Vul hier een locatie in"
              invalid={!!errors.location}
            ></Textbox>
            <Paragraph>{errors.location?.message}</Paragraph>
          </FormField>
          <FormField invalid={!!errors.description}>
            <Paragraph>
              <FormLabel htmlFor="description">Beschrijving:</FormLabel>
            </Paragraph>
            <Textarea
              id="description"
              invalid={!!errors.description}
              {...register('description', {
                required: 'Dit is verplicht',
                minLength: { value: 4, message: 'Min length is 4' },
              })}
              placeholder="Vul hier een beschrijving in"
            ></Textarea>
            <Paragraph>{errors.description?.message}</Paragraph>
          </FormField>
          <FormField invalid={!!errors.enclosedAerialView}>
            <Paragraph>
              <FormLabel htmlFor="enclosed-aerial-view">Bijgevoegde luchtfoto&apos;s:</FormLabel>
            </Paragraph>
            <Textbox
              id="enclosed-aerial-view"
              invalid={!!errors.enclosedAerialView}
              {...register('enclosedAerialView', {
                required: 'Dit is verplicht',
                minLength: { value: 4, message: 'Min length is 4' },
              })}
              placeholder="Upload hier uw luchtfoto's"
            ></Textbox>
            <Paragraph>{errors.enclosedAerialView?.message}</Paragraph>
          </FormField>
        </form>
        <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
          <FieldsetLegend>Hoe snel denkt u dat de eenhoorns en vliegende huisdieren hulp nodig hebben?</FieldsetLegend>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="right-now" type="radio">
                <RadioButton
                  className="utrecht-form-field__input"
                  id="right-now"
                  name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                  value="1"
                />
                Nu meteen
              </FormLabel>
            </Paragraph>
          </FormField>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="shortly" type="radio">
                <RadioButton
                  className="utrecht-form-field__input"
                  id="shortly"
                  name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                  value="2"
                />
                Binnenkort
              </FormLabel>
            </Paragraph>
          </FormField>
          <FormField type="radio">
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel htmlFor="when-pigs-can-fly" type="radio">
                <RadioButton
                  className="utrecht-form-field__input"
                  id="when-pigs-can-fly"
                  name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                  value="3"
                />
                Wanneer varkens kunnen vliegen
              </FormLabel>
            </Paragraph>
          </FormField>
        </Fieldset>
        <Paragraph>Contactgegevens:</Paragraph>
        <Paragraph>
          Laat uw naam en e-mailadres achter, zodat we u op de hoogte kunnen houden van eventuele magische
          ontwikkelingen.
        </Paragraph>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <br />
          <FormField invalid={!!errors.fullName}>
            <FormLabel>Volledige naam:</FormLabel>
            <br />
            <Textbox
              invalid={!!errors.fullName}
              {...register('fullName', {
                required: 'Dit is verplicht',
                minLength: { value: 4, message: 'Min length is 4' },
              })}
              placeholder="Vul hier uw volledige naam in"
            ></Textbox>
          </FormField>
          <Paragraph>{errors.fullName?.message}</Paragraph>
          <br />
          <FormField invalid={!!errors.emailAdress}>
            <FormLabel>E-mailadres:</FormLabel>
            <br />
            <Textbox
              invalid={!!errors.emailAdress}
              {...register('emailAdress', { required: 'Dit is verplicht' })}
              placeholder="Vul hier uw e-mailadres in"
            ></Textbox>
          </FormField>
          <Paragraph>{errors.emailAdress?.message}</Paragraph>
          <br />
          <Button type="submit" appearance="primary-action-button" formAction="./confirmed">
            Dien uw melding in
          </Button>
        </form>
        <Paragraph>
          Dank u voor het deelnemen aan ons absurde meldpunt. Hoewel we geen garanties kunnen geven over de snelheid
          waarmee roze eenhoornparkeerzones worden gerealiseerd, waarderen we uw levendige verbeelding en deelname aan
          dit absurde avontuur.
        </Paragraph>
        <PageFooter>
          <svg width="55" height="64" viewBox="0 0 55 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.8349 3.00852L33.5091 2.69139L33.8817 2.60354H35.3344L36.7346 2.28731L36.1671 1.987L32.764 2.10937L32.5526 2.02263L32.3213 2.21694L32.231 2.56746L32.4794 2.9182L32.8349 3.00852ZM26.2037 4.81847L28.1533 3.95742L28.6501 3.83505L29.2879 3.55334L29.87 3.53586L30.0664 3.43254L30.0312 3.3429L29.9955 3.16585L29.9612 3.07799L30.7935 3.04348L31.1835 2.90341L31.5205 2.44352L29.43 2.84827L29.2333 2.99149L29.002 3.18288L27.1062 3.5697H26.7885L26.5387 3.80009L25.7762 4.06342L25.6181 4.46683L25.7938 4.81824L26.2037 4.81847ZM39.1643 2.23555V2.30502L39.2533 2.4442L39.537 2.09233L41.9662 1.33573H42.1611V1.17884L41.7695 1.05715L40.3711 1.17884L39.9984 1.26669L39.4668 1.49619L39.1113 1.81152L39.2533 2.12909L39.1643 2.23555ZM45.7237 0.474226L45.7765 0.317347L45.884 0.281487L45.9177 0.230838H45.599L45.4561 0.352532L45.4224 0.474452L45.6345 0.581578L45.7237 0.474226ZM43.8808 0.335498L44.3792 0.507845L44.4131 0.419541L44.4501 0.386151L44.5021 0.350962H44.5734L43.7915 0L43.6131 0.0192735L43.6312 0.174585L43.8808 0.335498ZM22.3573 7.77611L22.676 7.31645L23.7937 6.24272L24.2002 6.08584L24.3768 5.98117H24.7486V5.8243L24.0426 5.71941L23.0834 6.2797L22.1617 7.12371L21.5587 7.89937L22.0011 8.09301L22.3573 7.77611ZM54.1436 9.13044L54.2685 8.74249L54.303 8.37562L54.2856 8.00583L54.2493 7.35253H54.0925L53.0613 7.0883L52.6356 6.84334L52.6024 6.45495L52.5322 6.26042V6.15643L52.5848 6.08584L52.6887 5.98117V5.8243H52.6015L52.4766 5.94599L52.3169 5.99866L52.1403 5.96504L52.0177 5.8243L51.7692 5.89377L51.2008 5.5762L50.7561 5.43523L50.6526 5.33259L50.5815 5.22568L50.5083 5.17234L50.4914 5.1199L50.1526 4.87337L50.0824 4.83976L49.6031 2.90453L49.4312 2.68669L49.1489 2.54415L47.7468 2.3169L44.4147 2.82609L42.3068 3.4424L41.9534 3.72165L41.8296 3.75639L41.6857 3.70349L41.4386 3.49305L41.2957 3.44083L38.5302 3.53048L37.1656 3.59973L36.2084 4.09166L35.8895 4.10959L35.3748 4.47916L33.1233 5.37763L32.6249 5.79964L31.9516 5.90475L31.6684 6.00964L31.42 6.27432L31.2061 6.59144L30.9753 6.85656L30.4626 7.08382L30.1602 7.34805L29.6633 7.9294L29.381 8.63088L28.9891 10.2156L28.7057 10.7956L28.4234 10.991L27.7666 11.1479L27.4997 11.3604L27.2885 11.6044L24.4482 14.1192L23.898 14.3658L23.3305 14.437L23.029 14.5437L22.428 15.0527L22.1082 15.2288L21.5571 15.2624L20.9733 15.0879L20.6526 14.6658L20.8647 13.9615L20.7592 13.7871L20.6187 13.9263L19.7487 13.7871L19.5906 13.9789L19.4849 14.4534L19.4321 14.9982L19.4147 15.4209L19.288 16.1773L18.687 17.7252L18.5438 18.4467L18.5095 18.7974L18.2611 19.9426L17.6571 24.3902L17.373 24.9888V25.1632L17.2481 25.8151L16.3964 28.3153L14.9603 30.883L13.24 33.3989L11.2195 35.8254L10.7421 36.1441L10.1919 36.2313L9.53695 36.0921L9.4466 36.2474L9.35627 36.4245L9.51662 36.8122L9.78177 37.7102L9.8371 38.0616L9.80096 38.1313L9.72892 38.221L9.65868 38.3433L9.62322 38.5195L9.65868 38.6605L9.72892 38.7501L9.81813 38.8212L10.1716 39.3129L10.28 39.5253L10.1013 39.6645L9.96019 39.7349L9.85449 39.7539L9.79894 39.7349L9.40912 39.5253L8.93077 39.4177L8.66404 39.4377L8.54095 39.5946L7.65562 39.8595L7.24909 40.139L7.37286 40.7564H7.51605L7.62242 40.7385L7.67527 40.6488L7.95848 40.5784H8.31284L8.6681 40.4744L8.93325 40.2799L9.34227 40.5601L9.67833 40.8774L9.90779 41.3528L9.99633 42.0894L10.191 42.3888L11.1658 42.6889L11.5195 42.9355L11.6615 43.0941L11.1823 43.128L10.9338 43.232L10.7563 43.4274L10.7224 43.6199V43.8664L10.7563 44.13L10.8272 44.3245L10.9338 44.4467L11.075 44.5531L11.2179 44.6056L11.8375 44.6246L12.0143 44.7974L12.0852 45.2212L11.7464 44.9417L11.3749 44.835L10.1169 44.7638L9.74428 44.8687L8.99897 45.2212L10.1167 46.2571L10.4521 46.4532L10.666 46.4868L11.1089 46.4341L11.3218 46.4532L11.9068 46.7151L12.5462 46.8212L12.936 47.048L13.2375 47.4178L13.3604 47.9121L13.1673 48.422L12.742 48.5437L12.2819 48.5269L11.9978 48.6134L11.7128 48.474L10.9858 48.5789L10.6513 48.474L10.4374 48.193L10.1531 47.4178L9.96109 47.0641L9.37547 46.5536L8.68504 46.2732L7.33785 46.1331V45.9922L7.42616 45.9025L7.67459 45.7456L7.81778 45.6936L7.69289 45.359L7.49798 45.0789L7.26761 44.8673L7.05531 44.7425L6.73641 44.7089L2.94214 45.1123L1.48925 46.0108L1.34629 46.2042L1.39914 46.5737L1.55926 46.8203L2.02113 47.225L2.19706 47.4866L2.39197 47.8389L2.60495 48.156L2.85338 48.2992L3.65131 48.4731L3.97088 48.4554L4.55583 48.2432L4.76813 48.2609L5.3183 48.7907L6.16998 49.212L6.5598 49.6154L6.70118 49.6851L6.85927 49.6672L7.03996 49.5442L7.55263 49.4917L7.76584 49.3861L7.92528 49.1598L8.35056 48.3693L8.54366 48.2436L9.13087 48.2956L9.36237 48.4023L10.1429 49.0706L10.427 49.2461L10.7288 49.3335L12.022 49.3525L12.34 49.2629L12.5003 49.0513L12.6406 49.1564L12.676 49.3308V49.5614L12.7115 49.8409L12.8183 50.1053L12.8727 50.1748L13.2793 50.1941L13.4387 50.2826L13.7931 50.4742L13.9512 50.5269L14.0569 50.5623L14.608 50.5975H14.7136L14.9804 50.4572L14.9987 50.3675L15.0515 50.0672L15.0332 50.0338L14.9614 49.8568L14.6436 49.489L14.608 49.4366L14.5379 49.2956V49.0668L14.6283 48.8904L14.6619 48.7335L14.486 48.5392L15.2313 48.1172L15.7094 47.9426L15.9764 47.8359L16.3472 47.8026H16.3998L16.5767 47.8359L16.6824 48.0329L16.665 48.3124V48.4007L16.5419 48.6811L16.5229 48.786L16.5055 48.8906L16.5932 48.9603L16.7707 49.0845L16.8581 49.1031H16.9484L17.055 49.0845L17.3574 49.0307L17.782 49.1387H17.8349L18.0307 49.1197L18.2256 49.0484L18.3686 48.9435L19.4673 47.6082L19.929 47.3617L20.1221 47.3803L20.2305 47.4139L20.3716 47.4666L20.4419 47.5009L20.6176 47.6266L20.7608 47.818L20.7971 48.1542L20.7413 48.3664L20.7079 48.4886L20.6704 48.7178L20.653 48.8227L20.7079 49.0323L20.7608 49.2095L20.1404 48.9276L19.9823 48.9467L19.8931 49.2125L20.1943 49.3335L21.1881 49.3687L21.3136 49.4023L21.4548 49.4384L21.7199 49.5623L22.0034 49.6842L22.3049 49.5966L22.465 49.4191L22.6602 49.227L22.8743 48.9276L22.9797 48.7875L23.0674 48.6439L23.1941 48.4343L23.2469 48.2934L23.2995 48.1685L23.3361 48.0282L23.3551 47.957L23.4425 47.833L23.6559 47.9758L23.6749 48.011L23.6986 48.0253L24.123 48.3046L24.2287 48.4984L24.4062 48.8346L24.3534 49.2044L24.1953 49.5551L24.177 49.7297L24.1424 50.0276L24.2298 50.2402L24.7079 50.7665L24.78 50.9612L24.9202 51.4543L24.9751 51.576V51.5952H24.9923L25.2247 51.7187L25.7721 51.6649H25.8286L26.0215 51.6827L26.2713 52.0011V52.7907L26.5197 52.8624L27.0509 52.7387L28.7179 52.81L29.0183 52.7051L29.6055 52.3017L29.6757 52.2658L29.8898 52.1614L30.1922 52.1968L30.3503 52.3017L30.5272 52.4059L30.7411 52.6708L30.795 52.7407L30.9023 53.1625L30.9552 53.6732L31.275 53.9536L32.072 54.2015L32.1779 54.2712L32.266 54.3407L32.409 54.5002L32.4975 54.5708L32.5675 54.6235H32.8173L33.1369 54.5529L33.4002 54.5002H33.5969L33.8255 54.6405L34.1279 55.0439L34.3056 55.1842L34.3239 55.2033L34.5369 55.149L34.749 55.0966H34.8195L34.997 55.1143L35.1219 55.3962L35.1575 55.5013L35.05 55.6062L34.9597 55.6959L34.9071 55.9424L35.2264 56.2752L35.1381 56.329L35.1018 56.3483L35.0491 56.3655L34.9588 56.3989L34.8007 56.418L34.6426 56.3989L34.6607 56.4532L34.6778 56.5571L34.6952 56.6275L34.7307 56.6972V56.7165L34.6234 57.0143L34.5532 57.1573V57.1746L34.4468 57.3156L34.2887 57.1746L34.1814 57.2459L34.1274 57.368L34.1094 57.4556L34.092 57.5787L34.0746 57.7548L34.2679 58.0215L34.0385 58.5475L33.4878 59.4281L33.7905 59.3384H33.9307L34.0746 59.4081L34.0385 59.4794L33.9133 59.673L33.6649 60.1838L33.4872 60.4467L33.4171 60.4991L33.2575 60.5515L33.1346 60.6058L33.0971 60.6228L32.2631 61.5385L32.0697 61.7508L32.0869 62.0838V62.2429L32.1208 62.2952L32.3159 62.5744L32.6353 62.7869L32.6883 62.8043L32.9368 62.9285H32.9539L33.1506 62.9814L33.1335 63.1558V63.2261L33.077 63.4209L32.9896 63.738H33.007L33.1335 63.8084L33.2383 63.8781L33.3458 63.8971H33.3995L33.4704 63.8781L33.5581 63.8597L33.7548 63.561L33.772 63.5271L33.8948 63.424L33.9852 63.4576L34.038 63.4747L34.3203 63.7931L34.4642 63.8971L35.6867 63.8635L35.9873 63.9666H36.0063L37.0337 64L37.1412 63.9827L37.3171 63.9494L37.3528 63.6683L37.2643 63.5271L37.1213 63.424L37.0156 63.2461L36.9591 62.9659L37.1733 63.0191L37.3688 62.8238L37.4398 62.5592L37.4054 62.3673L37.3833 62.1694L37.5075 61.959L37.7031 61.8541L38.0193 61.8731L38.1787 61.6779L38.2691 61.4511V61.2741L38.1424 60.8165L38.1613 60.6755L38.2316 60.5507L38.2652 60.4632L37.8054 60.3064L37.4693 60.095L37.3627 59.9722L37.3273 59.797V59.4608L37.3982 59.2143L37.4856 59.0188L37.4504 58.8967L36.9372 58.9491L36.5648 58.8268L36.3688 58.8091L36.1741 58.8615L35.8014 59.0377L35.6065 59.071L35.5882 58.5081L35.3741 57.8754L35.2867 57.3646L35.6765 57.154L35.8733 57.2577L36.0494 57.4675L36.245 57.6468L36.509 57.613L36.6897 57.416L36.953 56.8557L37.1498 56.6428L38.443 55.6217L39.2402 55.1824L39.4543 54.903L39.1528 54.621L39.4708 54.3559L39.5774 54.2855L39.2576 54.1815L38.5498 54.6553L38.2128 54.4809L38.1051 54.0775L38.141 53.5845L38.2664 53.145L38.4075 52.8985L38.7099 52.5462L39.4369 51.2272L39.5774 51.0854L39.9306 50.8389L40.0729 50.6468L40.1441 50.3664L40.1802 49.8734L40.2706 49.6804L40.0562 49.4339L40.0738 49.0305L40.1811 48.5558L40.234 48.1163L40.164 47.7116L40.0562 46.972L39.4916 46.3203L38.5516 45.0368L38.497 44.755L38.5679 44.4413L38.726 43.929L37.7688 43.5255L37.4492 43.1221L37.6457 42.4875L37.5021 42.3463L37.1841 42.1177L37.0237 42.0464L36.6172 42.0654L36.4745 42.0128L36.4925 41.7662L36.8123 41.4514L36.8297 40.9915L36.6328 40.5515L36.3166 40.3064L36.3676 40.1112L36.5989 39.9556L37.1848 39.8483L37.451 39.7259L37.7334 39.5155L37.9283 39.4088L38.4947 39.2519L38.9557 39.3741L39.2926 39.4637L39.5243 39.5159L39.3281 39.2167L38.7973 38.6728L38.6196 38.5471L39.0977 38.2846L39.5578 38.4966L40.0196 38.8642L40.4978 39.0596L40.9407 38.97L41.0674 38.9872L41.1726 39.0948L41.3307 39.3741L41.4016 39.4453L41.9339 39.535L42.1643 39.6573L42.1986 40.0092L42.731 39.868L42.7854 39.6396L42.6788 39.1289L43.5822 39.3926H43.8645L44.0953 39.2878L44.7857 38.7609L46.186 38.286L47.444 38.2499L47.8166 38.0394L48.1554 37.6526L48.475 37.0699L48.5979 36.9482L48.7035 36.9299L48.7758 36.8602L48.793 36.5782L48.7575 36.4213L48.6873 36.3142L48.3338 35.9272L47.4121 35.4173L47.1113 35.3308L46.8983 35.1706L46.8622 34.8207L46.9692 34.5928L47.0944 34.5406H47.2342L47.4121 34.4509L47.519 34.3082L47.6407 34.0081L47.7134 33.8862L47.9619 33.6396L48.1748 33.5168L49.097 33.4137L49.2745 33.2557L49.5925 32.6219L49.8592 32.3418L50.4622 32.0766L50.7436 31.8317L51.0824 31.3032L51.2405 31.128L51.8607 30.7409L51.8959 30.6172L51.7733 30.4065L51.6484 29.9148V29.489L51.7539 29.1403L52.0364 28.4883L52.1945 27.6271L51.9996 27.0444L51.1499 25.6535L51.0596 25.6887L50.9722 25.8456L50.8473 25.9695L50.4932 26.0755L50.1205 26.0928L49.7305 26.0211L49.0028 25.7409L47.8871 25.584L47.516 25.4079L47.2319 25.0903L47.1434 24.7541L47.1244 24.3507L47.0707 23.9473L46.8947 23.5944L47.1244 23.5775L47.9058 23.1887L47.4433 22.8019L47.3383 22.6625V22.4655L47.4094 22.2741L47.427 22.0612L47.304 21.8147L47.7992 21.4639L48.2783 21.3214L49.625 21.3039L50.3681 21.5336L51.0596 21.4278L51.2744 21.5175L51.7701 21.6744L52.036 21.1829L52.1417 20.3738L52.2656 17.8736L52.3892 17.0988L52.6376 16.3956L53.7919 14.5831L54.0946 13.8088L54.2174 13.0693L54.2348 12.2423L54.1115 10.569L54.0569 10.3776L53.9873 10.2537L53.934 10.1127L53.9171 9.83146L53.9505 9.6385L54.1436 9.13044ZM35.5819 24.5251L35.4216 25.069L35.1566 25.5276L34.5889 26.3364L34.2892 26.6697L33.8282 27.0058L33.3492 27.2524L32.5336 27.4962L32.1074 27.8469L31.4687 28.6228L31.0089 29.6966L30.8492 29.8727L29.6278 30.1712L29.0248 30.1186L28.4035 29.8205L27.0911 28.8702L26.8068 28.8351L26.2055 28.9048L25.8686 28.8702L25.6016 28.766L24.8938 28.2719L24.6106 28.1688L23.9712 28.1165L23.7427 28.0468L22.8718 27.4993L22.9436 27.3944L23.031 27.3599L23.0502 27.3427V27.1665L23.2634 27.2008L23.3526 27.255L23.4583 27.3427V27.1665L23.6724 27.3247L23.7953 27.0782L23.9019 26.7259L24.0794 26.5515L24.2375 26.4991L24.3969 26.3563L24.5218 26.1647L24.6293 25.9182L24.3988 25.7958L24.2933 25.6024L24.2029 25.409L24.0433 25.2663L24.3276 25.1439L24.4333 25.1271L24.3631 24.8965L24.3285 24.8068L24.612 24.5087L24.5063 23.9485L24.046 22.9097L23.8495 22.2425L23.8323 21.6607L24.0462 21.2723L24.5419 21.1844L24.9144 21.3245L25.021 21.396L25.2705 21.6607L25.4654 21.6255L25.6795 21.5383L26.5477 20.9913L26.7772 20.7288L26.9547 20.1822L27.169 19.9906L27.6298 19.76L27.5769 19.532L27.5414 19.2165L27.4884 18.9337L27.3994 18.8122L26.6733 18.4944L26.4429 18.4774L26.248 18.5119L26.0886 18.5993L25.9474 18.7423L25.7523 18.8642L25.5757 18.7593L25.4155 18.5831L25.275 18.4935L25.0801 18.1762L25.0429 16.6986L24.9729 16.1894L24.2632 14.7631L23.9606 14.519L24.5478 14.2725L25.1492 13.9025L27.3838 11.933L28.5715 11.1764L28.7296 11.6683L28.8189 11.8826L28.9609 12.1291L29.1021 12.2156L29.1556 12.5159L29.1387 12.8144L29.0494 13.0946L29.1897 13.359L29.2453 13.7288L29.175 14.0986L28.9081 14.4124L29.105 14.7817L28.9783 14.9592L28.7493 15.0811L28.5901 15.346L28.5201 15.3812L28.4489 15.4507V15.6806L28.5038 15.8207L28.5919 15.8902L28.6987 15.9426L28.7877 16.0482L29.0883 16.2947L29.531 16.4186L30.4183 16.4556L30.594 16.5074L30.9312 16.7172L31.1444 16.7694L31.3741 16.7358L31.5168 16.6647L31.8166 16.4556L32.049 16.366H32.2628L33.2907 16.6645L33.4508 16.7882L32.9368 16.8918L32.5108 17.1921L32.1745 17.6506L31.8906 18.2109L31.7657 18.7936L31.6589 19.7597L31.6761 20.6562L31.9259 21.0433L32.1018 21.1856L32.4388 21.8187L32.5646 21.9951L32.7931 22.0645L34.6559 21.9597L34.9044 22.0121L35.0995 22.1549L35.2416 22.3992L35.347 22.786L35.5467 23.6419L35.5995 24.0677L35.5819 24.5251ZM32.8521 22.4115L32.4625 22.0081L32.214 22.2015L31.399 22.4646L31.1492 22.6416L30.529 23.2566L30.3885 23.2766L30.1042 23.2398L29.9987 23.3294L29.6599 24.1934L29.465 24.3335L28.9343 24.5464L28.2947 25.1246L27.2332 25.5466L26.6295 26.1461L25.7439 26.6206L25.3365 27.0058L25.088 27.1468L25.2303 27.4973L25.2832 27.8321L25.3715 28.0968L25.673 28.2537L26.3124 28.2194L26.5412 28.2537L27.5164 28.6237L27.9593 28.8702L28.8082 29.5394L29.18 29.6948L30.1218 29.6614L30.6173 29.4666L30.919 29.0632L31.0073 28.4821L30.9016 27.7766L31.2915 27.5652L31.4882 27.4931L31.7167 27.4758L31.9311 27.3709L32.2314 26.9319L32.4092 26.827L32.7818 26.7566L33.4555 26.4397L33.8621 26.3693L34.2532 26.2275L34.6252 25.8752L34.9258 25.4186L35.158 24.9792L35.3703 24.4162V23.9576L35.0862 22.9361L32.8521 22.4115ZM5.19702 43.2593L5.83392 43.2219L5.92313 43.1522L6.27839 42.7488L6.4733 42.7658L6.59638 42.8716L6.6856 42.9955L6.77481 43.0829L7.32317 43.312L7.55444 43.4872L7.64274 43.7701L7.78322 44.0686L8.08564 44.279L8.61751 44.4727L8.86595 44.4897L9.94822 44.279L10.1967 44.1916L10.427 44.0334L10.5693 43.8043L10.5338 43.435L10.2685 43.2407L9.68126 43.0838L9.54101 42.9606L9.4527 42.8364L9.38066 42.7145L8.83162 42.063L8.6008 41.8882L8.28123 41.8187L6.93403 41.7813L6.7398 41.6755L6.50853 41.6578L6.45591 41.6755L5.26794 41.853L4.75413 42.1865L4.71867 42.9077L4.91358 43.171L5.19702 43.2593ZM11.6665 50.0141L11.5782 50.1008L11.3297 50.4532L10.8507 50.418L10.7624 50.3837L10.6219 50.277L10.2832 50.2248L10.1219 50.1712L9.99904 50.0312L9.83959 49.6795L9.75128 49.5394L9.55637 49.4155L9.23657 49.2916L8.93506 49.2745L8.7939 49.4682L8.72366 49.9092L8.52695 50.136L7.14588 50.7187L6.80891 50.7714L6.27703 50.6121H5.70947L5.40706 50.489L4.98156 50.0489L3.59891 49.662L2.71268 49.0991L2.50128 49.1168L2.28718 49.2922L0 50.0318L0.0718186 50.5948L0.106601 50.8933L0.0537502 51.4585L0.0354579 51.9843L0.16103 52.3539L0.23127 52.5475L0.569817 52.9164L0.798603 53.0222L0.995318 53.1098L1.27876 53.145L1.42082 53.1623L1.98838 53.0744L2.09475 53.0574L2.11305 52.9677L2.13044 52.844L2.09475 52.5625L2.11305 52.4744L2.13044 52.2996L2.28853 52.1414H2.30592L2.50264 52.0874L2.7312 52.0701L3.29966 51.9482H3.33512L3.65492 51.9301L4.00838 51.9825L5.72822 52.5457L5.99495 52.7219L6.06496 53.0211L6.0478 53.2676L6.06496 53.4964L6.27839 53.7429L6.43784 53.8142L6.45523 53.8312L8.1211 53.8142L8.3352 53.7429L8.4409 53.7087L8.52831 53.6372L9.07938 53.2147L10.8329 52.3362L11.5253 51.7905L12.0755 51.0338L12.1283 50.8754L12.1453 50.8232L12.2521 50.3133V50.2241L11.9506 50.0475L11.6665 50.0141ZM19.9075 13.1757L20.3865 13.0356L20.7063 12.4191L21.3629 11.8752L21.7529 11.275L21.9478 10.9061L22.0361 10.6089H21.7545V10.4662L21.9968 10.2535V9.88391L21.8557 9.46168L21.6608 9.14635L21.7326 9.03967L21.75 8.93456L21.7136 8.81286L21.6608 8.66988L21.2179 8.65262L20.8644 9.23532L20.5277 9.93926L19.8524 10.5009L19.5154 11.0657L19.234 11.751L19.1437 12.3666L19.4086 12.963L19.9075 13.1757Z"
              fill="white"
            />
          </svg>
          <Heading1>Voorbeeld</Heading1>
        </PageFooter>
      </Page>
    </Document>
  );
}
