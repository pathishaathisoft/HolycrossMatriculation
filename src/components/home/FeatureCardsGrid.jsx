import Container from '../common/Container.jsx'
import IconCard from '../common/IconCard.jsx'

function FeatureCardsGrid({ cards = [] }) {
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <IconCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
            featured={card.featured}
          />
        ))}
      </div>
    </Container>
  )
}

export default FeatureCardsGrid
