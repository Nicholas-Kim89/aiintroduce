// Team Data
const teamData = {
    "kim-eunyong": {
        name: "김은용",
        role: "Team Leader",
        badge: "TEAM LEADER",
        mbti: "ENTJ",
        major: "MBA (Digital Transformation)",
        image: "assets/kim_eunyong.png",
        bio: "AI 기술을 경영 전반에 녹여내어 실질적인 비즈니스 가치를 창출하는 데 집중하고 있습니다. 데이터 기반의 전략적 의사결정 체계를 구축하는 것이 저의 핵심 미션입니다.",
        strengths: ["Strategic Thinking", "Change Management", "AI Governance"],
        projects: ["AI Strategy Roadmap 2025", "LLM-based Knowledge Management", "Corporate AI Governance"]
    },
    "jeon_somin": {
        name: "전소민",
        role: "Professional",
        badge: "PROFESSIONAL",
        mbti: "INFJ",
        major: "Statistics / Data Science",
        image: "assets/jeon_somin.png",
        bio: "복잡한 데이터 속에서 의미 있는 인사이트를 추출하여 비즈니스 문제를 해결합니다. 예측 모델링을 통해 미래 리스크를 관리하고 최적화된 솔루션을 제공합니다.",
        strengths: ["Statistical Modeling", "Python/R", "Data Visualization"],
        projects: ["Predictive Market Analytics", "Supply Chain Optimization", "Customer Churn Prediction"]
    },
    "oh_seunghwan": {
        name: "오승환",
        role: "Professional",
        badge: "PROFESSIONAL",
        mbti: "ESTP",
        major: "Computer Engineering",
        image: "assets/oh_seunghwan.png",
        bio: "최신 AI 기술을 실제 현장에 적용 가능한 시스템으로 구현하는 데 열정을 가지고 있습니다. 엣지 컴퓨팅과 컴퓨터 비전 기술을 활용한 스마트 팩토리 구현이 전문입니다.",
        strengths: ["Edge AI Implementation", "Computer Vision", "System Architecture"],
        projects: ["Smart Factory Edge AI", "Computer Vision QA System", "Multi-agent Robotic Coordination"]
    },
    "son_juhee": {
        name: "손주희",
        role: "Specialist",
        badge: "SPECIALIST",
        mbti: "ENFP",
        major: "UX Design",
        image: "assets/son_juhee.png",
        bio: "사용자 중심의 관점에서 AI 기술이 어떻게 인간과 상호작용해야 하는지 고민합니다. 복잡한 AI 기능을 직관적이고 아름다운 인터페이스로 풀어내는 것이 저의 목표입니다.",
        strengths: ["UX/UI Design", "User Research", "Interaction Design"],
        projects: ["AI Assistant UX Design", "Human-Centered AI Interface", "Interactive Data Dashboard"]
    },
    "lee_seonggyu": {
        name: "이성규",
        role: "Specialist",
        badge: "SPECIALIST",
        mbti: "INTP",
        major: "Applied Mathematics",
        image: "assets/lee_seonggyu.png",
        bio: "수학적 모델링과 알고리즘을 통해 최적의 해답을 찾습니다. 강화 학습과 리스크 평가 모델링을 통해 효율적인 자원 배분과 수익 극대화 전략을 연구합니다.",
        strengths: ["Reinforcement Learning", "Algorithm Design", "Financial Modeling"],
        projects: ["RL for Resource Allocation", "Risk Assessment Modeling", "Algorithmic Trading AI"]
    },
    "hong_sohee": {
        name: "홍소희",
        role: "Specialist",
        badge: "SPECIALIST",
        mbti: "ESFJ",
        major: "Marketing",
        image: "assets/hong_sohee.png",
        bio: "AI 기술을 마케팅과 커뮤니케이션 영역에 접목하여 고객 경험을 혁신합니다. 감성 분석과 자동화된 인게이지먼트 도구를 통해 브랜드 가치를 높이는 활동에 집중합니다.",
        strengths: ["AI Marketing", "Sentiment Analysis", "Content Strategy"],
        projects: ["Personalized Marketing AI", "Sentiment Analysis Tool", "Automated Engagement Bot"]
    }
};

const projectData = {

    "회의 생산성 향상": {
        area: "전사 EX",
        owner: "오승환, 이성규",
        goal: "회의 전-중-후 프로세스에 AI를 결합하여 불필요한 리소스 소모를 방지하고 결정 중심의 생산적 회의 문화를 구축합니다.",
        features: [
            "회의 예약 시 AI 기반 최적 시간 및 참석자 추천",
            "실시간 다국어 번역 및 화자 구분 회의록 자동 생성",
            "회의 내용 요약 및 Action Item 자동 추출/배정"
        ],
        impact: "회의 준비 시간 30% 단축 및 회의록 작성 리소스 90% 절감"
    },
    "VELO AI": {
        area: "전사 EX",
        owner: "김은용",
        goal: "사내 지식 베이스와 LLM을 결합하여 임직원의 업무 효율을 극대화하는 지능형 AI 어시스턴트를 개발합니다.",
        features: [
            "사내 규정, 매뉴얼 기반의 정확한 Q&A 제공",
            "문서 요약, 번역 및 이메일 초안 작성 지원",
            "다양한 사내 시스템과의 API 연동을 통한 업무 자동화"
        ],
        impact: "단순 반복형 업무 검색 시간 50% 단축 및 업무 정확도 향상"
    },
    "3C기반 CS AI": {
        area: "CX",
        owner: "전소민, 홍소희, 이성규",
        goal: "Customer, Competitor, Company 데이터를 분석하여 고객 만족도를 높이고 선제적인 CS 대응 체계를 구축합니다.",
        features: [
            "고객 상담 데이터 실시간 감성 분석 및 이슈 탐지",
            "경쟁사 동향 분석을 통한 마케팅 포인트 추천",
            "AI 챗봇 기반의 24/7 고객 응대 및 정교한 상담 지원"
        ],
        impact: "고객 문의 응대 속도 개선 및 상담 품질의 상향 평준화"
    },
    "인재검색 Agent": {
        area: "HR",
        owner: "손주희",
        collab: "ERP PI 협업",
        goal: "방대한 사내 인재 데이터를 자연어로 검색하고 최적의 프로젝트 Squad를 구성할 수 있도록 지원합니다.",
        features: [
            "기술 스택, 경력 사항 기반의 시맨틱 검색",
            "AI 기반 커리어 패스 예측 및 성장 기회 추천",
            "프로젝트 요구 사항에 따른 최적 인재 매칭 알고리즘"
        ],
        impact: "인재 적재적소 배치 최적화 및 인사 관리 효율성 증대"
    },
    "인원/인건비 시뮬레이션 Agent": {
        area: "HR",
        owner: "손주희",
        collab: "ERP PI 협업",
        goal: "조직 개편이나 경영 계획 수립 시 인건비 변동을 정확히 시뮬레이션하여 전략적 의사결정을 돕습니다.",
        features: [
            "다양한 시나리오별 인건비 변동 자동 계산",
            "조직 구조 변화에 따른 미래 인건비 트렌드 분석",
            "직급별, 부서별 인건비 불균형 탐지 및 가이드 제공"
        ],
        impact: "경영 계획 수립 시간 단축 및 인건비 운영 리스크 최소화"
    },
    "리더 패트롤 AI": {
        area: "환경/안전",
        owner: "오승환",
        collab: "환경/안전AX 협업",
        goal: "현장의 위험 요소를 AI가 실시간으로 탐지하고 리더에게 즉시 알림을 제공하여 안전사고를 예방합니다.",
        features: [
            "CCTV 영상 분석을 통한 보호구 미착용 등 불안전 행동 탐지",
            "위험 구역 내 비인가자 출입 감지 및 경고 알림",
            "사고 이력 데이터 기반의 고위험 사업장 집중 관리 모드"
        ],
        impact: "현장 안전 사고 발생률 40% 감소 및 안전 관리 자동화"
    },
    "구매 TASK AGENT": {
        area: "구매/물류",
        owner: "홍소희",
        collab: "구매/물류AX 협업",
        goal: "복잡한 구매 승인 프로세스와 문서 작성을 AI가 보조하여 구매 리드타임을 단축합니다.",
        features: [
            "구매 요청서 데이터 자동 검증 및 오기입 탐지",
            "최적 공급사 추천 및 가격 비교 보고서 자동 생성",
            "반복적인 소모품 구매 워크플로우 자동화"
        ],
        impact: "구매 업무 처리 속도 30% 향상 및 데이터 기반 투명한 구매 실현"
    },
    "소모품 가격 감지 AGENT": {
        area: "구매/물류",
        owner: "손주희",
        collab: "구매/물류AX팀 협업",
        goal: "외부 시장의 가격 변동 데이터를 실시간으로 모니터링하여 최적의 구매 시점을 제안합니다.",
        features: [
            "글로벌 마켓 소모품 가격 크롤링 및 트렌드 분석",
            "원자재 가격 변동에 따른 소모품 가격 변동성 예측",
            "이상 가격 탐지 시 담당자 자동 알림 및 대안 상품 추천"
        ],
        impact: "구매 비용 절감 및 시장 변화에 대한 선제적 대응력 확보"
    },
    "채권 자동화 AGENT": {
        area: "경영관리",
        collab: "경영관리PI 협업",
        goal: "수작업 위주의 채권 관리 업무를 AI로 자동화하여 미수금 회수율을 높이고 운영 효율을 극대화합니다.",
        features: [
            "입금 내역 실시간 대조 및 자동 반제 처리",
            "미수금 연령 분석 및 회수 시점 예측 모델",
            "채권 발생부터 회수까지의 전 과정 디지털 트래킹"
        ],
        impact: "미수금 회수 기간 단축 및 수작업 오류 0% 실현"
    },
    "채권 리스크 감지 AGENT": {
        area: "경영관리",
        collab: "경영관리PI 협업",
        goal: "거래처의 재무 상태 및 시장 데이터를 분석하여 채권 부실 위험을 조기에 탐지합니다.",
        features: [
            "거래처 신용도 변동 실시간 모니터링",
            "이상 결제 패턴 분석을 통한 부실 징후 포착",
            "리스크 수준별 조기 경보 시스템 및 대응 가이드 제공"
        ],
        impact: "부실 채권 발생 최소화 및 건전한 재무 구조 유지"
    },
    "PSI 분석 기반 필요량 산출 AGENT": {
        area: "CDS SQUAD",
        owner: "오승환 (MENTOR)",
        collab: "구매기획팀 (MENTEE)",
        goal: "현업 담당자가 직접 PSI(Production, Sales, Inventory) 데이터를 분석하여 정확한 필요량을 산출할 수 있도록 기술을 전수합니다.",
        features: [
            "수요 예측 기반의 적정 재고 수준 자동 산출",
            "생산 및 판매 실적 데이터 기반의 공급망 가시성 확보",
            "멘티가 직접 개발에 참여하는 현업 밀착형 멘토링"
        ],
        impact: "현업의 AI 개발 역량 내재화 및 재고 회전율 최적화"
    },
    "정도경영 AX": {
        area: "CDS SQUAD",
        owner: "전소민 (MENTOR)",
        collab: "정도경영팀 (MENTEE)",
        goal: "감사 및 윤리 경영 프로세스에 AI 기술을 접목하여 이상 징후를 탐지하고 투명한 경영 환경을 조성합니다.",
        features: [
            "비정상 거래 데이터 추출 및 이상 징후 분석",
            "대량의 텍스트 데이터 기반 리스크 키워드 탐지",
            "윤리 경영 가이드라인 위반 사례 자동 필터링"
        ],
        impact: "기업 리스크 선제적 관리 및 정도 경영 문화 확산"
    },
    "리더십 서베이 시스템 내재화": {
        area: "CDS SQUAD",
        owner: "홍소희 (MENTOR)",
        collab: "리더십개발팀 (MENTEE)",
        goal: "서베이 결과 분석 및 보고서 생성을 AI로 내재화하여 리더십 진단 업무의 효율성을 높입니다.",
        features: [
            "주관식 서베이 답변 내용에 대한 AI 감성 분석 및 요약",
            "개인별/조직별 리더십 강점 및 보완점 자동 리포팅",
            "맞춤형 리더십 코칭 멘트 생성 기능 개발"
        ],
        impact: "서베이 분석 리소스 절감 및 데이터 기반 맞춤형 리더십 육성"
    },
    "NCC 스케쥴러 개발": {
        area: "생산",
        owner: "홍소희",
        collab: "석유화학제조AX 협업",
        goal: "석유화학 공정의 핵심인 NCC(Naphtha Cracking Center)의 운전 스케줄을 AI로 최적화하여 생산 효율을 극대화하고 에너지 소모를 최소화합니다.",
        features: [
            "원료 가용성 및 제품 수요 기반의 실시간 최적 생산 스케줄 산출",
            "공정 변수 분석을 통한 수율 예측 및 이상 운전 방지",
            "에너지 비용 최적화를 위한 부하 분산 스케줄링"
        ],
        impact: "생산 효율 5% 향상 및 연간 에너지 비용 대폭 절감"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.member-card, .project-item, .area-card, .squad-card').forEach(el => {
        observer.observe(el);
    });

    // Background Interaction
    document.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.blob');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Modal Logic for Projects
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        const closeBtn = projectModal.querySelector('.close-btn');
        const overlay = projectModal.querySelector('.modal-overlay');

        document.querySelectorAll('.task-item, .squad-card').forEach(card => {
            card.addEventListener('click', () => {
                const titleElement = card.querySelector('h3');
                if (!titleElement) return;
                
                const title = titleElement.innerText.split('\n')[0].trim();
                const data = projectData[title];
                
                if (data) {
                    document.getElementById('modalTitle').innerText = title;
                    document.getElementById('modalArea').innerText = data.area;
                    document.getElementById('modalMeta').innerText = `${data.owner || ''} ${data.collab ? ' | ' + data.collab : ''}`;
                    document.getElementById('modalDesc').innerText = data.goal;
                    document.getElementById('modalImpact').innerText = data.impact;
                    
                    const featuresList = document.getElementById('modalFeatures');
                    featuresList.innerHTML = '';
                    data.features.forEach(f => {
                        const li = document.createElement('li');
                        li.innerText = f;
                        featuresList.appendChild(li);
                    });

                    projectModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeProjectModal = () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeProjectModal);
        overlay.addEventListener('click', closeProjectModal);
    }

    // Modal Logic for Team Members
    const teamModal = document.getElementById('teamModal');
    if (teamModal) {
        const closeBtn = teamModal.querySelector('.close-btn');
        const overlay = teamModal.querySelector('.modal-overlay');

        document.querySelectorAll('.member-card').forEach(card => {
            card.addEventListener('click', () => {
                const memberId = card.id;
                const data = teamData[memberId];
                
                if (data) {
                    document.getElementById('teamModalImg').src = data.image;
                    document.getElementById('teamModalName').innerText = data.name;
                    document.getElementById('teamModalRole').innerText = data.role;
                    document.getElementById('teamModalBadge').innerText = data.badge;
                    document.getElementById('teamModalMbti').innerText = `MBTI: ${data.mbti}`;
                    document.getElementById('teamModalMajor').innerText = `Major: ${data.major}`;
                    document.getElementById('teamModalBio').innerText = data.bio;
                    
                    const strengthsList = document.getElementById('teamModalStrengths');
                    strengthsList.innerHTML = '';
                    data.strengths.forEach(s => {
                        const span = document.createElement('span');
                        span.className = 'strength-tag';
                        span.innerText = s;
                        strengthsList.appendChild(span);
                    });

                    const projectsList = document.getElementById('teamModalProjects');
                    projectsList.innerHTML = '';
                    data.projects.forEach(p => {
                        const li = document.createElement('li');
                        li.innerText = p;
                        projectsList.appendChild(li);
                    });

                    teamModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeTeamModal = () => {
            teamModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeTeamModal);
        overlay.addEventListener('click', closeTeamModal);
    }

    // Generic Modal Close on ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = '';
        }
    });
});
